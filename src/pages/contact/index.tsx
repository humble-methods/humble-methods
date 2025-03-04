import React from 'react'
import ContactForm from './ContactForm'
import FloatingCircles from '@/components/molecules/Circles'
import styled from 'styled-components'

const Container = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    h1 {
        margin: 0 auto;
        margin-bottom: 20px;
        font-size: 4rem;
        line-height: 4rem;
    }
    p {
        margin: 0 auto;
    }
    @media (max-width: 1024px) {
        display: flex;
        align-items: flex-start;
        h1 {
            margin: 0;
            margin-bottom: 0;
            font-size: 3rem;
            line-height: 4rem;
        }
    }
`

export default function Contact() {
    return (
        <Container>
            <h1>Let&apos;s chat!</h1>
            <p style={{ textAlign: 'center', marginBottom: 40 }}>Whether you got a question, interested in learning more about Humble Methods, unsure about how AI and automation may take its place in the future, send us an email and we can talk! We are also fluent in Mandarin Chinese!</p>
            <FloatingCircles />
            <ContactForm />
        </Container>
    )
}