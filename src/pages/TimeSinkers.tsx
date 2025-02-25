import React from "react"
import Card from "./Card"
import styled from "styled-components"

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    @media (width <= 1024px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

export default function TimeSinkers() {
    return (
        <Section>
            <h1>The Biggest Time-Sinkers </h1>
            <p style={{ textAlign: 'center' }}>Most businesses lose 10+ hours a week on repetitive tasks—time that could be spent growing, creating, or innovating. Here are some of the biggest culprits:</p>
            <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card
                    section="Administrative"
                    list={[
                        { title: "Email Overload", description: "Use filters, templates, and AI-powered autoresponders." },
                        { title: "File Organization Nightmares", description: "Use automated file tagging and cloud syncing." }
                    ]}
                />
                <Card
                    section="Workflow and Scheduling"
                    list={[
                        { title: "Task & Schedule Management Chaos", description: "Use AI scheduling assistants and automated reminders." },
                        { title: "Manual Data Entry", description: "Sync data across tools with automation platforms." }
                    ]}
                />
                <Card
                    section="Marketing & Engagement"
                    list={[
                        { title: "Marketing Time Sink", description: "Automate posting, responses and analytics." },
                        { title: "Customer Support Overload", description: "Use AI chatbots and automated ticketing systems." }
                    ]}
                />
            </Container>
        </Section>
    )
}