import React from "react";
import HowItWorks from "@/pages/HowItWorks";
import TimeSinkers from "./TimeSinkers";
import Hero from "./Hero"
import styled from "styled-components";

const StyledHome = styled.div`
  h1 {
    font-size: 3rem!important;
  }
`

export default function Home() {
  return (
    <StyledHome>
      <Hero />
      <TimeSinkers />
      <HowItWorks />
      <section style={{ marginTop: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <h1>Why Automate?</h1>
        <p>🚀 Save Hours Every Week – Focus on high-impact work.</p>
        <p>💡 Reduce Mistakes & Missed Deadlines – Get things done right, every time.</p>
        <p>⚡ Run Your Business with Less Effort – More efficiency, less stress.</p>
        <p style={{ textAlign: 'center' }}>Automation isn’t about replacing work—it’s about removing friction so you can focus on what really matters.</p>
      </section>
    </StyledHome>
  );
}
