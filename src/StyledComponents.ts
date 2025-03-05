import styled from "styled-components"

export const Glass = styled.div`
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: var(--border-radius);
    border: 1px solid rgba(255, 255, 255, 0.251);
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    a {
        flex-grow: 1;
        margin-top: 30;
        width: 200px;

        max-width: 300px;
        min-width: 150px;
        height: 45px;
        font-size: 1.25rem;
        font-weight: bold;
        line-height: 45px;
        text-transform: capitalize;
        background-color: var(--action);
        border: 0;
        cursor: pointer;
        border-radius: 5px;
        color: var(--forground);
        text-align: center;
        &:hover {
            background-color: var(--foreground-dark);
        }

        @media (width <= 1024px) { 
            max-width: none;
        }
    }
`