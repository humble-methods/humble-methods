import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    .floating-circles-container {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
    background-color: #f8fafc;
    border-radius: 8px;
    z-index: -1000;
    }

    .circle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.8;
    z-index: -1;
    filter: saturate(1.5);
    }

    .circle-1 {
    width: 128px;
    height: 128px;
    background: linear-gradient(to right, #ff6b6b, #4ecdc4);
    top: 15%;
    left: 10%;
    animation: float 8s ease-in-out infinite;
    }

    .circle-2 {
    width: 160px;
    height: 160px;
    background: linear-gradient(to bottom left, #f7b731, #8854d0);
    top: 60%;
    left: 20%;
    animation: float 12s ease-in-out infinite 1s;
    }

    .circle-3 {
    width: 96px;
    height: 96px;
    background: linear-gradient(to right, #20bf6b, #0fbcf9);
    top: 30%;
    left: 60%;
    animation: float 10s ease-in-out infinite 2s;
    }

    .circle-4 {
    width: 144px;
    height: 144px;
    background: linear-gradient(to top right, #eb3b5a, #45aaf2);
    top: 70%;
    left: 70%;
    animation: float 9s ease-in-out infinite 0.5s;
    }

    .circle-5 {
    width: 112px;
    height: 112px;
    background: linear-gradient(to bottom right, #fd9644, #a55eea);
    top: 20%;
    left: 80%;
    animation: float 11s ease-in-out infinite 1.5s;
    }

    @media (width <= 1024px) {
    .circle-1 {
    top: 0%;
    left: -5%;
    }
    .circle-5 {
    left: 90%;
    }
    }

    .content {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    }

    .content h1 {
    font-size: 2.25rem;
    font-weight: bold;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    }

    @keyframes float {
    0% {
        transform: translateY(0) translateX(0);
    }
    25% {
        transform: translateY(-15px) translateX(15px);
    }
    50% {
        transform: translateY(0) translateX(0);
    }
    75% {
        transform: translateY(15px) translateX(-15px);
    }
    100% {
        transform: translateY(0) translateX(0);
    }
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
    .circle-1 {
        width: 100px;
        height: 100px;
    }

    .circle-2 {
        width: 120px;
        height: 120px;
    }

    .circle-3 {
        width: 80px;
        height: 80px;
    }

    .circle-4 {
        width: 110px;
        height: 110px;
    }

    .circle-5 {
        width: 90px;
        height: 90px;
    }

    .content h1 {
        font-size: 1.75rem;
    }
    }
`

export default function FloatingCircles() {
    return (
        <Container className="floating-circles-container">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-5"></div>
        </Container>
    )
}

