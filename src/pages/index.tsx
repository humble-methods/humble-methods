import React from "react";
import HowItWorks from "@/pages/HowItWorks";
import TimeSinkers from "./TimeSinkers";
import Hero from "./Hero"
import styled from "styled-components";
import { Glass } from "@/StyledComponents";

const StyledHome = styled.div`
  h1 {
    font-size: 3rem!important;
    line-height: 4rem!important;
    @media (width <= 1024px) {
      font-size: 2rem!important;
      line-height: 2.5rem!important;
    }
  }
  h5{
    margin-bottom: 10px;
  }
`

const Container = styled(Glass)`
    padding: 10px 20px;
    width: 100%;
    @property --myColor1 {
        syntax: '<color>';
        initial-value: rgba(31, 137, 219, 0.5);
        inherits: false;
    }

    @property --myColor2 {
        syntax: '<color>';
        initial-value: rgba(244, 42, 139, 0.5);
        inherits: false;
    }
    background: linear-gradient(to right top, var(--myColor1), var(--myColor2));
    &:hover{
        box-shadow: 0 10px 20px 5px var(--background-light);
        border-color: var(--action-light);
        --myColor1: rgba(244, 42, 139, 1);
        --myColor2: rgba(31, 137, 219, 1);
    }
    transition: box-shadow 0.3s, --myColor1 0.3s, --myColor2 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      margin-top: 0;
    }
    button {
      margin: 40px 0;
      width: 100%;
      border: 1px solid var(--action-light);
      mix-blend-mode: luminosity;
    }
    filter: brightness(1) contrast(125%) saturate(70%);
`

export default function Home() {
  return (
    <StyledHome>
      <Hero />
      <TimeSinkers />
      <HowItWorks />
      <section style={{ marginTop: 200 }}>
        <Container>
          <h1 style={{ marginBottom: 30 }}>Why Automate?</h1>
          <h5>💡 Reduce Mistakes & Missed Deadlines – Get things done right, every time.</h5>
          <h5>🚀 Save Hours Every Week – Focus on high-impact work.</h5>
          <h5>⚡ Run Your Business with Less Effort – More efficiency, less stress.</h5>
          <h2>Automation isn’t about replacing work</h2>
          <h5>It’s about removing friction so you can focus on what really matters.</h5>
          <button>Get In Touch</button>
        </Container>
      </section>
    </StyledHome>
  );
}
