import React from 'react';
import './About.css';

export const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>Welcome to TheAhsanEntertainment</h1>
                <p>Your ultimate destination for movie lovers!</p>
            </div>

            <div className="about-content">
                <h2>What We Offer</h2>
                <p>
                    At TheAhsanEntertainment, we bring you detailed and up-to-date information about your favorite movies. Whether you're here to discover a blockbuster hit, revisit a classic, or explore something new, our platform has it all. 
                    Dive deep into movies with complete details including:
                </p>
                <ul className="movie-details-list">
                    <li><strong>Actors:</strong> Know who's starring in the film, and read up on their careers.</li>
                    <li><strong>Poster:</strong> Check out stunning visuals and official posters.</li>
                    <li><strong>Title:</strong> Never miss out on any movie title, from indie gems to mainstream hits.</li>
                    <li><strong>Runtime:</strong> Stay informed with accurate movie lengths.</li>
                    <li><strong>Genre:</strong> Filter and explore genres that match your tastes.</li>
                    <li><strong>Type:</strong> Whether it's a movie, series, or short film, we've got you covered.</li>
                    <li><strong>Year:</strong> Find movies from different years, spanning all eras of cinema.</li>
                    <li><strong>Plot:</strong> Get a synopsis of each movie before you watch it.</li>
                    <li><strong>Box Office:</strong> Discover how much a movie earned at the box office.</li>
                    <li><strong>imdbID:</strong> Access IMDb's unique identifier for further exploration.</li>
                    <li><strong>Awards:</strong> Find out what accolades your favorite films have received.</li>
                    <li><strong>IMDb Rating:</strong> Stay informed about critical and audience reviews with IMDb scores.</li>
                </ul>
            </div>

            <div className="about-footer">
                <h3>Our Mission</h3>
                <p>
                    Our goal is to create a community for movie enthusiasts, where everyone can engage with their favorite films and shows effortlessly. At TheAhsanEntertainment, we strive to ensure our users get access to accurate, comprehensive, and user-friendly movie details. 
                    From the latest box office hits to award-winning classics, we offer it all at your fingertips.
                </p>
                <p>Join us and explore the magic of cinema with TheAhsanEntertainment.</p>
            </div>
        </div>
    );
};


