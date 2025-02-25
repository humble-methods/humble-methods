import "./styles.css"
import React from 'react'

export default async function About() {
    return (
        <section className="about">
            <div className="about_wrapper">
                <h1>About Humble Methods.</h1>
                <p>My name is Hank, and I founded Humble Methods after realizing how I was consistently improving the developer experience for my colleagues at American Express. Whether through small workflow optimizations or larger automation efforts, I found ways to make daily tasks more efficient.</p>

                <p>With a background in UI/UX design, I naturally identify friction points in workflows. That has led me to create everything from simple scripts that reduce unnecessary clicks to full-scale software pipelines that streamline testing and delivery. Whether at work or in personal projects—like automating Excel processes for family—I’ve always focused on building practical solutions.</p>

                <p>Now, through Humble Methods, I continue to refine and automate workflows to help others work more efficiently.</p>
            </div>
        </section >
    )
}