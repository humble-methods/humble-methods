import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    margin-bottom: 10px;
`

const StyledInput = styled.input`
    flex-grow: 1;
    font-size: 1rem;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    min-width: 300px;
    min-height: 45px;
    border: 1px solid var(--foreground-dark);
    border-radius: var(--button-radius);
    background-color: rgba(17, 25, 40, 0.75);
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export default function Input({
    id,
    label,
    type,
    inputStyles,
    labelStyles
}: {
    id: string,
    label: string,
    type: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    inputStyles?: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    labelStyles?: any,
}) {
    return (
        <Container>
            <Label htmlFor={id} aria-label={id} {...labelStyles}>{label}</Label>
            <StyledInput type={type} id={id} name={id} aria-labelledby={id} {...inputStyles} />
        </Container>
    )
}