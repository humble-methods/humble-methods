"use client"
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
    backdrop-filter: blur(32px) saturate(100%);
    -webkit-backdrop-filter: blur(32px) saturate(100%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.251);
    padding: 10px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 1280px;
    margin: 0 auto;
    overflow: hidden;
`

const IconButton = styled.button`
    background-color: transparent;
    border-radius: 0;
    width: 48px;
    min-width: 48px;

    &:active{
        background-color: var(--background-light);
    }
`

const NavLink = styled(Link)`
    margin-bottom: 15;
    font-size: 10rem;
    line-height: 10rem;
    text-transform: uppercase;

    @media (width <= 1024px){
        font-size: 5rem;
        line-height: 5rem;
    }
`

const NavLinkContainer = styled.div`
    height: ${({ isexpanded }) => isexpanded === 'true' ? '100vh' : '0'};
    display: flex;
    flex-direction: column;

    -webkit-transition: all 0.5s;
    transition: all 0.5s;
`

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Nav>
            <Container isexpanded={isExpanded.toString()} >
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href="/">
                        <h1 style={{ marginTop: 20 }}>
                            Humble Methods
                        </h1>
                    </Link>
                    <IconButton onClick={() => (setIsExpanded((prev) => !prev))}>
                        Menu
                    </IconButton>
                </div>
                <NavLinkContainer isexpanded={isExpanded.toString()}>
                    <NavLink
                        href="/case_studies">
                        Case Studies
                    </NavLink>
                </NavLinkContainer>
            </Container>
        </Nav>
    )
}