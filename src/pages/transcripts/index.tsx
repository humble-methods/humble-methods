import React from 'react'

export default async function Page({
    // params,
}: {
    params: Promise<{ slug: string }>
}) {

    return (
        <div>
            <h1>Transcripts</h1>
        </div>
    )
}