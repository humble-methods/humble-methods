import React from "react"
import styled from "styled-components"
import { Glass } from "../StyledComponents"

const howItWorksMap = [
    {
        title: 'Understanding Your Business & Bottlenecks',
        description: `
We analyze your daily tasks to find inefficiencies—manual work, delays, or disconnected tools—so we know exactly where automation can help.
      `
    },
    {
        title: 'Building & Integrating Smart Systems',
        description: `
We set up smart automation to handle tasks like scheduling, invoicing, and communication, ensuring everything runs seamlessly without extra effort.
        `
    },
    {
        title: 'Optimization & Continuous Improvement',
        description: `
We test, adjust, and improve your automation so it stays efficient as your business grows, letting you focus on what matters most.
        `
    }
]

const Step = styled(Glass)`
    padding: 10px 20px;
    display: flex;
    max-width: 75%;
    margin-bottom: 20px;
    &:nth-of-type(even) {
        margin-left: 100px;
    }

    @media (width <= 1024px) {
        padding: 5px 10px;
        max-width: 100%;

        &:nth-of-type(even) {
            margin-left: 0;
        }
    }
`

const Number = styled.h2`
    opacity: 0.1;
    font-size: 7rem;
    line-height: 1rem;
    padding-bottom: 40px;

`

export default function HowItWorks() {
    return (
        <section style={{ marginTop: 200, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ marginBottom: 50 }}>How It Works (3-Step Process)</h1>
            {howItWorksMap.map(({ title, description }, index) => {
                return (
                    <Step key={title}>
                        <Number>{index}</Number>
                        <div style={{ marginLeft: 20, marginTop: 10 }}>
                            <h3 style={{ marginBottom: 10 }}>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </Step>
                )
            })}
        </section>
    )
}