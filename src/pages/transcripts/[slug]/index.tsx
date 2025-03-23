import fs from 'fs'
import React from 'react'
import parse from 'html-react-parser';
import { File } from '../../../types/types';
import styled from 'styled-components';
import Head from 'next/head';

const Container = styled.div`
    h1 {
        margin-bottom: 20px;
    }
    h2 {
        margin-top: 40px;
        margin-bottom: 10px;
    }
    .tags {
    }
`

export default function Page({
    file,
}: {
    file: File
}) {

    const { content, tags, ownerUserName, ownerUsername, ownerFullName, url, timestamp, title, subtitle, hashtags } = file
    const date = new Date(timestamp)
    const keywords = [...tags, ...hashtags].join(', ')

    return (
        <Container>
            <Head>
                <title>{title} | {date.toDateString()} | by {ownerUsername || ownerUserName || ownerFullName}</title>
                <meta name="description" content={title + '|' + subtitle} />
                <meta name="keywords" content={keywords} />
                <meta property="og:title" content={title} />
                <meta property="og:type" content="article" />
                <meta property="og:description" content={keywords} />
            </Head>
            <p>{date.toDateString()}, by {ownerUsername || ownerUserName || ownerFullName}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {tags.map((tag: string) => {
                    return <span className="tags" key={tag} style={{ textWrap: 'nowrap' }}>{tag}</span>
                })}
            </div>
            {parse(content)}
            <a href={url} target='_blank'>Source</a>
        </Container>
    )
}

type Params = {
    slug: string
}

type Context = {
    params: Params
}

export async function getStaticProps({ params: { slug } }: Context) {
    // List of files in blgos folder
    const file = JSON.parse(fs.readFileSync(`./src/resources/transcript/${slug}.json`, 'utf8'))

    return { props: { file } }
}

export async function getStaticPaths() {
    const filesInProjects = fs.readdirSync('./src/resources/transcript')
    const paths = filesInProjects.map(file => {
        const filename = file.slice(0, file.indexOf('.'))
        return { params: { slug: filename } }
    })

    return {
        paths,
        fallback: false
    }
}