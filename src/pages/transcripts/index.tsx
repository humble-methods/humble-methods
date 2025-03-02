import fs from 'fs'
import styled from "styled-components"
import React from 'react'
import { Glass } from "../../StyledComponents"
import Link from 'next/link'
import { File } from '../../types/types'

const Container = styled(Glass)`
    padding: 20px 20px 20px;
    margin-top: 20px;
    width: 49%;
    @media (width <=1024px ) {
        width: 100%
    }
    h2 {
        margin-top: 0;
    }
    &:hover{
        box-shadow: 0 10px 20px 5px var(--background-light);
        background-color: var(--background-light);
        border-color: var(--action-light);
        cursor: pointer;
    }
    * {
        &:hover{
            cursor: pointer;
        }
    }
    transition: box-shadow 0.3s;
    transition: background-color 0.3s;
`

export default function Page({
    fileList
}: {
    fileList: Array<File>,
}) {

    return (
        <div>
            <h1>Transcripts</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                {fileList.map(({ title, subtitle, slug, timestamp, tags }) => {
                    const date = new Date(timestamp)
                    return (
                        <Container key={title}>
                            <Link href={`/transcripts/${slug}`} >
                                <p>{date.toDateString()}</p>
                                <h2>{title}</h2>
                                <p>{subtitle}</p>
                                <div style={{ textWrap: 'nowrap', display: 'flex', flexWrap: 'wrap' }}>
                                    {tags.map((tag: string) => {
                                        return <label key={slug + tag}>{tag}</label>
                                    })}
                                </div>
                            </Link>
                        </Container>
                    )
                })}
            </div>
        </div >
    )
}


export async function getStaticProps() {
    let tagList: Array<string> = []
    const filesInBlogs = fs.readdirSync('./src/resources/transcript')
    const fileList = filesInBlogs.map(filename => {
        const file = JSON.parse(fs.readFileSync(`./src/resources/transcript/${filename}`, 'utf8'))
        tagList = [...tagList, ...file.tags]
        return file
    })

    fileList.sort((a, b) => {
        if (a.timestamp < b.timestamp) return 1
        return -1
    })

    return { props: { fileList, tagList } }
}