import styled from "styled-components"
import React from 'react'
import { Glass } from "../../StyledComponents"
import Link from "next/link"

const Container = styled(Glass)`
    padding: 20px 20px 30px;
    width: 50%;
    h2 {
        margin-top: 0;
    }
    &:hover{
        box-shadow: 0 10px 20px 5px var(--background-light);
        background-color: var(--background-light);
        border-color: var(--action-light);
        cursor: pointer;
    }
    transition: box-shadow 0.3s;
    transition: background-color 0.3s;
`

export default function CaseStudies() {
    return (
        <section className="case_studies">
            <h1>Case Studies</h1>
            <Container>
                <Link href="/transcripts">
                    <h2>Instagram Transcripts</h2>
                    <p>Feb 24, 2025</p>
                    <p>This automation converts Instagram Reels into polished blog posts with minimal effort. It starts by detecting new Reels, extracting audio, and transcribing speech using a tool like Whisper AI. The raw text is then processed with ChatGPT, where it’s cleaned, structured, and formatted into a well-organized article with proper headings and summaries. Finally, the refined content is inserted into a blog template, optimized for SEO, and automatically published to a page on this site. This workflow saves time, ensures consistency, and makes repurposing social media content seamless for creators and marketers.</p>
                    <div>
                        <label>Apify</label>
                        <label>n8n</label>
                        <label>Google Sheets</label>
                        <label>ChatGPT</label>
                        <label>JavaScript</label>
                    </div>
                </Link>
            </Container>
        </section >
    )
}