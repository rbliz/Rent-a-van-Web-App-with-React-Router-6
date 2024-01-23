import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>The Van you're looking for.</h1>
            <p>Join the fun! Rent the perfect van for your unbridled road trip!</p>
            <Link to="vans">Ready...Set...Van!</Link>
        </div>
    )
};