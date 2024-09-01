import React from 'react';
import BackgroundWithCircle from '../components/BackgroundWithCircle/BackgroundWithCircle';
import Hero from '../components/Hero/Hero';
// import './About.css';

const About: React.FC = () => {
    return (
        <div className="about-page">
                    <Hero></Hero>
               <BackgroundWithCircle topPosition="30%" size="150px">
                <h1>O mnie</h1>
                <p>Jestem front-end developerem z pasją do tworzenia nowoczesnych aplikacji.</p>
            </BackgroundWithCircle>

            <BackgroundWithCircle topPosition="60%" size="300px">
                <h1>Wybrane Projekty</h1>
                <p>Pracowałem nad różnorodnymi projektami, w tym aplikacjami webowymi, mobilnymi i stronami internetowymi.</p>
            </BackgroundWithCircle>

            <BackgroundWithCircle topPosition="10%" size="200px">
                <h1>Kontakt</h1>
                <p>Skontaktuj się ze mną, aby dowiedzieć się więcej o mojej pracy.</p>
            </BackgroundWithCircle>
        </div>
    );
};

export default About;
