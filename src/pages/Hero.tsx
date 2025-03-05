import React from "react"
import styled from "styled-components"
import Image from "next/image"
import background from "./background.svg"
import Link from "next/link"
import { ButtonContainer } from "@/StyledComponents"

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 115px);
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
        height: 300vh;
        width: 1400vw;
        left: -620vw;
        top: 100vh;
        transform: scaleX(1) rotate(70deg);
    }
`

const ImageContainer = styled.div`
    position: absolute;
    z-index: -1;
    top: -100px;
    @media (width <= 1024px) {
        width: 100%;
        overflow: hidden;
        height: 700vh;
        top: 0;
    }
`

export default function Hero() {
    return (
        <Section>
            <h1
                style={{
                    margin: '0 0 20px',
                    textTransform: 'uppercase',
                    textAlign: 'center',
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
            <ButtonContainer>
                <Link href="/contact">
                    Get In Touch
                </Link>
            </ButtonContainer>
            <ImageContainer>
                <StyledImage src={background} alt="background" />
            </ImageContainer>
        </Section>
    )
}