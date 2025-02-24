"use client"
import React from "react"
import styled from "styled-components"
import Image from "next/image"
import background from "./background.svg"

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`

const StyledImage = styled(Image)`
    width: 150vw; 
    height: 150vh;
    object-fit: cover;
    transform: rotate(15deg);
    top: 300px;
    position: relative;

    @media (width <= 1024px) {
        width: 300vw;
        height: 100vh;
        top: 0;
        left: -100px;
        transform: rotate(18deg);
    }
`

const ImageContainer = styled.div`
    position: absolute;
    z-index: -1;
    @media (width <= 1024px) {
        position: fixed;
        overflow: hidden;
    }
`

export default function Hero() {
    return (
        <Section>
            <h1
                style={{
                    margin: '0 0 20px',
                    textTransform: 'uppercase',
                    textAlign: 'center'
                }}>
                We Automate the Repetitive.
                <br />
                So You Can Focus on What Matters.
            </h1>
            <p style={{
                textAlign: 'center'
            }}>
                No unnecessary complexity. No distractions.
                <br />
                Just business workflow automation that works behind the scenes.
            </p>
            <button style={{ marginTop: 30, width: 200 }}>Get Started</button>
            <ImageContainer>
                <StyledImage src={background} alt="background" />
            </ImageContainer>
        </Section>
    )
}