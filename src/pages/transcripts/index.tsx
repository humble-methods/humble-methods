import fs from 'fs'
import styled from "styled-components"
import React from 'react'
import { Glass } from "../../StyledComponents"
import Link from 'next/link'
import { File } from '../../types/types'
import Head from 'next/head'

const StyledLink = styled(Link)`
    width: 49%;
    margin-top: 20px;
    @media (width <=1024px ) {
        width: 100%
    }
`

const Container = styled(Glass)`
    padding: 20px;
    height: 100%;
    h2 { margin-top: 0;}
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


const TopContainer = styled(Glass)`
    padding: 15px 20px;
    margin-top: 20px;
    width: 32%;
    &:hover{
        box-shadow: 0 10px 20px 5px var(--background-light);
        background-color: var(--background-light);
        border-color: var(--action-light);
    }
    * {
        margin: 0;
    }
    transition: box-shadow 0.3s, background-color 0.3s;
    @media (width <=1024px ) {
        width: 100%
    }
`

const TopContainerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const BenefitsSection = styled.section`
    /* background-color: var(--background-light); */
    padding: 100px 0;
`

export default function Page({
    fileList
}: {
    fileList: Array<File>,
}) {

    return (
        <div>
            <Head>
                <title>Instagram Transcripts</title>
                <meta name="description" content="Instagram Reels Transcription Engine" />
            </Head>
            <h1 style={{ marginBottom: 20 }}>Instagram Reels Transcription Engine</h1>
            <p>This automation converts Instagram Reels into polished blog posts with minimal effort. It starts by detecting new Reels, extracting audio, and transcribing speech using a tool like Whisper AI. The raw text is then processed with ChatGPT, where it’s cleaned, structured, and formatted into a well-organized article with proper headings and summaries. Finally, the refined content is inserted into a blog template, optimized for SEO, and automatically published to a page on this site. This workflow saves time, ensures consistency, and makes repurposing social media content seamless for creators and marketers.</p>
            <BenefitsSection>
                <h2>Key Benefits</h2>
                <TopContainerWrapper>
                    <TopContainer>
                        <h2>Time Savings</h2>
                        <p>Reduce manual transcription time by 95%. What used to take hours now happens in minutes.</p>
                    </TopContainer>
                    <TopContainer>
                        <h2>Content Repurposing</h2>
                        <p>Turn Reels into blog posts, newsletters, and more without duplicating effort.</p>
                    </TopContainer>
                    <TopContainer>
                        <h2>SEO Boost</h2>
                        <p>Make your video content discoverable through search with accurate transcriptions.</p>
                    </TopContainer>
                    <TopContainer>
                        <h2>Accessibility</h2>
                        <p>Reduce manual transcription time by 95%. What used to take hours now happens in minutes.</p>
                    </TopContainer>
                    <TopContainer>
                        <h2>Analytics Insights</h2>
                        <p>Analyze transcribed text to identify trends, keywords, and content opportunities.</p>
                    </TopContainer>
                    <TopContainer>
                        <h2>Scalable Solution</h2>
                        <p>Process one Reel or thousands – our platform scales with your content volume.</p>
                    </TopContainer>
                </TopContainerWrapper>
            </BenefitsSection>
            <section>
                <h2>Transcripts</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    {fileList.map(({ title, subtitle, slug, timestamp, tags }) => {
                        const date = new Date(timestamp)
                        return (
                            <StyledLink href={`/transcripts/${slug}`} key={title}>
                                <Container>
                                    <p>{date.toDateString()}</p>
                                    <h2 style={{ marginBlock: 10 }}>{title}</h2>
                                    <p style={{ fontWeight: 400 }}>{subtitle}</p>
                                    <div style={{ textWrap: 'nowrap', display: 'flex', flexWrap: 'wrap' }}>
                                        {tags.map((tag: string) => {
                                            return <span className="tags" key={slug + tag}>{tag}</span>
                                        })}
                                    </div>
                                </Container>
                            </StyledLink>
                        )
                    })}
                </div>
            </section>
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