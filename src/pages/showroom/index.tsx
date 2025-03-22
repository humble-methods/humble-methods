import styled from "styled-components"
import React from 'react'
import { Glass } from "../../StyledComponents"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

const HeroContainer = styled(Glass)`
    padding: 10px 20px;
    width: 100%;
    height: 300px;
    @property --myColor1 {
        syntax: '<color>';
        initial-value: #1f89db;
        inherits: false;
    }

    @property --myColor2 {
        syntax: '<color>';
        initial-value: #f42a8b;
        inherits: false;
    }
    background: linear-gradient(to right top, var(--myColor1), var(--myColor2));
    &:hover{
        box-shadow: 0 10px 20px 5px var(--background-light);
        border-color: var(--action-light);
        --myColor1: #f42a8b;
        --myColor2: #1f89db;
    }
    display: flex;
    align-items: flex-end;
    transition: box-shadow 0.3s, --myColor1 0.3s, --myColor2 0.3s;
`
const Container = styled(Glass)`
    width: 100%;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 20px 40px;
`

const LeftContainer = styled.div`
    max-width: 49%;
    @media (width <= 1024px) {
        max-width: 100%;
    }
`

const RightContainer = styled.div`
    max-width: 49%;
    @media (width <= 1024px) {
        display: none;
    }
    flex-grow: 1;
    position: relative;
    display: flex;
    align-items: center;
`

const ShowcaseContainer = styled.div`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    @media (width <= 1024px) {
        flex-direction: column;
        max-width: 100%;
    }
    margin: 100px 0;
    h2 {
        margin-top: 20px;
        margin-bottom: 10px;
    }
`

const InvertedImage = styled(Image)`
    filter: brightness(0) invert(1);
`

export default function CaseStudies() {
    return (
        <div className="case_studies" style={{ width: "100%" }}>
            <Head>
                <title>Showroom</title>
                <meta name="description" content="Checkout all of our latest hacks and creative projects." />
            </Head>
            <section>
                <HeroContainer>
                    <h1 style={{ maxWidth: 600, lineHeight: '2.5rem' }}>Checkout all of our latest hacks and creative projects.</h1>
                </HeroContainer>
            </section>
            <ShowcaseContainer>
                <LeftContainer>
                    <h2>Instagram Reels Transcription Engine</h2>
                    <p>Effortlessly transform Instagram Reels into polished blog posts with automated transcription, content structuring, SEO optimization, and seamless publishing – saving time and ensuring consistency for creators and marketers.</p>
                    <div style={{ textWrap: 'nowrap', display: 'flex', flexWrap: 'wrap', marginBottom: 20 }}>
                        <span className="tags">Apify</span>
                        <span className="tags">Make.com</span>
                        <span className="tags">Google Sheets</span>
                        <span className="tags">ChatGPT</span>
                        <span className="tags">JavaScript</span>
                    </div>
                    <Link href="/transcripts">
                        See Results
                    </Link>
                </LeftContainer>
                <RightContainer>
                    <Container>
                        <InvertedImage
                            src="https://images.ctfassets.net/un655fb9wln6/1k5wBPhbu5kXiaYlFWgEJE/b590772959bd510e64cf230ef37bba3e/Make-Logo-RGB.svg"
                            alt="Make.com Logo"
                            width={200}
                            height={100}
                            style={{ position: 'relative', marginBottom: 40 }}
                        />
                        <div>
                            <InvertedImage
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/1280px-Instagram_simple_icon.svg.png"
                                alt="Instagram Logo"
                                width={100}
                                height={100}
                                style={{ marginRight: 50, position: 'relative' }}
                            />
                            <InvertedImage
                                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/ChatGPT-Logo.svg"
                                alt="OpenAI ChatGPT Logo"
                                width={100}
                                height={100}
                                style={{ marginLeft: 40, position: 'relative' }}
                            />
                        </div>
                    </Container>
                    {/* <Circle /> */}
                </RightContainer>
            </ShowcaseContainer>
        </div >
    )
}