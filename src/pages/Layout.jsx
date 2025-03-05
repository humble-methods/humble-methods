import Navbar from "@/pages/Navbar";
import Link from "next/link";
import styled from "styled-components";

const LinksContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: flex-end;
    a{
        margin-left: 40px;
    }

    @media (width <= 1024px){
        flex-direction: column!important;;
        align-items: flex-start;
        a {
            margin-left:0;
            margin-bottom: 20px;
        }
    }
`

export default function Layout({ children }) {
    const today = new Date()

    return (
        <div className="layout_wrapper">
            <Navbar />
            <main>
                {children}
            </main>
            <footer>
                <div>
                    <div>
                        <h3>Humble Methods</h3>
                        <p>© {today.getFullYear()} Humble Methods LLC</p>
                    </div>
                    <LinksContainer>
                        <Link href="/showroom">
                            Showroom
                        </Link>
                        <Link href="/about">
                            About
                        </Link>
                        <Link href="/contact">
                            Get in touch
                        </Link>
                    </LinksContainer>
                </div>
            </footer>
        </div>
    );
}
