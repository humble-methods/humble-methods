import React from 'react'
import styled from 'styled-components'
import { Glass } from '../StyledComponents'

type ListContent = {
    title: string,
    description: string
}

type CardProps = {
    section: string,
    list: Array<ListContent>,
}

const StyledCard = styled(Glass)`
    border: 1px solid rgba(255, 255, 255, 0.251);
    padding: 0px 20px 10px;
`

const Container = styled.div`
    max-width: 32%;
    
    @media (width <=1024px) {
        max-width: 100%;
    }
`

export default function Card({ list = [], section }: CardProps) {
    return (
        <Container>
            <h2>{section}</h2>
            <StyledCard>
                {list.map(({ title, description }) => {
                    return (
                        <div style={{ marginTop: 30 }} key={title}>
                            <h3 style={{ marginBottom: 10 }}>{title}</h3>
                            <p>{description}</p>
                        </div>
                    )
                })}
            </StyledCard>
        </Container>
    )
}