import React from 'react'
import Input from '@/components/molecules/Input'
import styled from 'styled-components'
import TextArea from '@/components/molecules/TextArea'
import { Glass } from '@/StyledComponents'

const Section = styled.section`
    @media (max-width: 1024px) {
        width: 100%;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 60%;
    textarea {
        height: 200px;
    }
    @media (max-width: 1024px) {
        width: 100%;
        textarea {
            height: 100px;
        }
    }
`
const GlassContainer = styled(Glass)`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    h1 {
        margin-top: 0;
    }
    @media (max-width: 1024px) {
        padding: 10px;
    }
`


export default function ContactForm() {
    return (
        <Section>
            <GlassContainer>
                <Form>
                    <Input id="name" label="Name" type="text" />
                    <Input id="company" label="Company (Optional)" type="text" />
                    <Input id="email" label="Email" type="email" />
                    <TextArea id="message" label="Message" type="text" />
                    <button type="submit">Submit</button>
                </Form>
            </GlassContainer>
        </Section>
    )
}