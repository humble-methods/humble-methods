import fs from 'fs'
import React from 'react'
import parse from 'html-react-parser';
import { File } from '../types';

export default function Page({
    file,
}: {
    file: File
}) {

    const { content, tags, ownerUsername, url, timestamp, title } = file
    const date = new Date(timestamp)

    return (
        <div>
            <h1>{title}</h1>
            <div style={{ display: 'flex' }}>
                {tags.map((tag: string) => {
                    return <label key={tag}>{tag}</label>
                })}
            </div>
            <p>{date.toDateString()}, by {ownerUsername}</p>
            {parse(content)}
            <a href={url} target='_blank'>Source</a>
        </div>
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