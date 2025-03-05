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

const ButtonRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    p{
        width: 100%;
        margin: 0!important;
        color: red;
        filter: brightness(2);
    }
    button{
        flex-grow: 1;
        width: 100%;
    }
    @media (max-width: 1024px) {
        p{
            margin: 0 0 20px!important;
        }
        flex-direction: column;
    }
`


export default function ContactForm() {
    const [loading, setLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string | null>(null)
    const [confirmation, setConfirmation] = React.useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setError(null)
        setConfirmation(null)
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        const requiredFields = ["name", "email", "message"]
        const missingFields = requiredFields.some((field) => !data[field])
        if (missingFields) {
            setError("Might have missed some fields!")
            return
        }

        setLoading(true)
        fetch(`/api/contactFormHandler`, {
            method: "POST",
            body: JSON.stringify(data),
        }).then((res) => {
            if (res.status === 200) {
                setConfirmation("Message sent!")
            } else {
                setError("Something went wrong, try again later.")
            }
        }).catch(() => {
            setError("Something went wrong, try again later.")
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <Section>
            <GlassContainer>
                <Form onSubmit={handleSubmit}>
                    <Input id="name" label="Name" type="text" />
                    <Input id="company" label="Company (Optional)" type="text" />
                    <Input id="email" label="Email" type="email" />
                    <TextArea id="message" label="Message" type="text" />
                    <ButtonRow>
                        {error && <p>{error}</p>}
                        {confirmation && <p style={{ color: 'white' }}>{confirmation}</p>}
                        <button type="submit">{loading ? "Loading..." : "Submit"}</button>
                    </ButtonRow>
                </Form>
            </GlassContainer>
        </Section>
    )
}