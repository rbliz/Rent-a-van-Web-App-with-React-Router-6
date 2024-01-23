import React from "react"
// import bgImg from "../assets/images/about-hero.png"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src="https://images.unsplash.com/photo-1523742672094-d87e0d0d006e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHRyYXZlbCUyMHZhbnxlbnwwfDB8MHx8fDA%3D" className="about-hero-image" />
            <div className="about-page-content">
                <h1>Vans before plans.</h1>
                <p>Our mission is to provide you with 'That' memorable Van for 'That' memorable road trip.</p>
                <p>Our team is packed with vans enthusiasts who know firsthand the wonders of touring the world on those beauties.</p>
            </div>
            <div className="about-page-cta">
                <h2>Next stop is right there!...<br />Your van is right here!</h2>
                <Link className="link-button" to="/vans">Explore our vans</Link>
            </div>
        </div>
    );
}