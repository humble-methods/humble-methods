import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
        background-color: var(--foreground-dark);
    }
`

const NavLink = styled(Link)`
    margin-bottom: 15;
    font-size: 10rem;
    line-height: 10rem;
    text-transform: uppercase;
    border-bottom: 1px solid var(--foreground-dark);

    @media (width <= 1024px){
        font-size: 5rem;
        line-height: 5rem;
    }
`

const NavFixedContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
`

const NavLinkContainer = styled.div`
    height: ${({ isexpanded }) => isexpanded === 'true' ? '100vh' : '0'};
    display: flex;
    flex-direction: column;

    -webkit-transition: all 0.5s;
    transition: all 0.5s;
`

const Logo = styled.span`
    font-size: 1.5rem;
    color: white;
    margin-top: 20px;
`

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const pathname = usePathname()

    useEffect(()=>{
        setIsExpanded(false)
    }, [pathname])


    return (
        <Nav>
            <Container isexpanded={isExpanded.toString()} >
                <NavFixedContainer>
                    <Link href="/">
                        <Logo>
                            Humble Methods
                        </Logo>
                    </Link>
                    <IconButton onClick={() => (setIsExpanded((prev) => !prev))}>
                        Menu
                    </IconButton>
                </NavFixedContainer>
                <NavLinkContainer isexpanded={isExpanded.toString()}>
                    <NavLink href="/about">
                        About
                    </NavLink>
                    <NavLink href="/showroom">
                        Showroom
                    </NavLink>
                </NavLinkContainer>
            </Container>
        </Nav>
    )
}