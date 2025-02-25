import React from 'react'
import parse from 'html-react-parser';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { content, tags, ownerUsername, url, timestamp, title } = require(`../../../resources/transcript/${slug}`)
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