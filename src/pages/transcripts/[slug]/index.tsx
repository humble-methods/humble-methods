import fs from 'fs'
import React from 'react'
import parse from 'html-react-parser';
import { File } from '../../../types/types';
import styled from 'styled-components';

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

    const { content, tags, ownerUserName, ownerUsername, url, timestamp } = file
    const date = new Date(timestamp)

    return (
        <Container>
            <p>{date.toDateString()}, by {ownerUserName || ownerUsername}</p>
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