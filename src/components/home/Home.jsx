import React from 'react';

import { AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';

import Team from '../team/Team';
import Footer from '../../views/footer/Footer';

import LeafBg from './img/leaf-bg.png';
import DotCyan from './img/dots-cyan.png';
import LeafOrange from './img/leaf-orange.png';
import DotOrange from './img/dots-orange.png';
import LeafYellow from './img/leaf-yellow.png';
import LeafCyan from './img/leaf-cyan.png';
import DotGroupOrange from './img/dots-group-orange.png';
import LeafPinkRound from './img/leaf-pink-round.png';
import LeafCyan2 from './img/leaf-cyan-2.png';

import ISCFLogo from './img/iscf.svg'

import './Home.scss';

function Home() {

    return (
        <div className="Home">
            <section className="hero-area bg-primary" id="parallax">
                <div className="container">
                    <div className="row">
                        <h1 className="text-white font-tertiary">India’s Unified DataSpace for Urban Mobility</h1>
                    </div>
                </div>
                <div className="layer-bg w-100">
                    <img className="img-fluid w-100" src={LeafBg} alt="bg-shape" />
                </div>
                <div className="layer" id="l2">
                    <img src={DotCyan} alt="bg-shape" />
                </div>
                <div className="layer" id="l3">
                    <img src={LeafOrange} alt="bg-shape" />
                </div>
                <div className="layer" id="l4">
                    <img src={DotOrange} alt="bg-shape" />
                </div>
                <div className="layer" id="l5">
                    <img src={LeafYellow} alt="bg-shape" />
                </div>
                <div className="layer" id="l6">
                    <img src={LeafCyan} alt="bg-shape" />
                </div>
                <div className="layer" id="l7">
                    <img src={DotGroupOrange} alt="bg-shape" />
                </div>
                <div className="layer" id="l8">
                    <img src={LeafPinkRound} alt="bg-shape" />
                </div>
                <div className="layer" id="l9">
                    <img src={LeafCyan2} alt="bg-shape" />
                </div>
                {/* <ul className="list-unstyled ml-5 mt-3 position-relative zindex-1">
                    <li className="mb-3"><a className="text-white" href="/"><AiFillTwitterSquare/></a></li>
                    <li className="mb-3"><a className="text-white" href="/"><AiFillLinkedin/></a></li>
                    <li className="mb-3"><a className="text-white" href="/"><i className="ti-dribbble"></i></a></li>
                    <li className="mb-3"><a className="text-white" href="/"><i className="ti-twitter"></i></a></li>
                </ul> */}
            </section>

            <section id="about" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-title">So, what is a Mobility DataSpace?</h2>
                        </div>
                        <div className="col-lg-10 mx-auto text-center">
                            <p className="font-secondary paragraph-lg text-dark">The lack of a robust data culture in India’s urban mobility sector acts as a constraint to the development of sound government policies, efficient service delivery and innovation from the private sector.</p>
                            <p className="font-secondary paragraph-lg text-dark">Therefore, Team Mobilize aims to build a unified DataSpace for Urban Mobility that will enable democratic sharing of standardized, high quality urban transport related datasets among various stakeholders in the quadruple helix model - Government, citizens, academia, and industry. Further, through sustained dialogue and collaboration with these stakeholders, the project hopes to incentivise a “culture of data” within the urban transport sector.</p>
                            {/* <a href="about.html" className="btn btn-transparent">know more</a> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section building-blocks">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-title">Building blocks of the Mobility DataSpace</h2>
                        </div>
                        <div className="col-md-6 mx-auto text-center card">
                            <h3>Data Standards</h3>
                            <p className="font-secondary text-dark">Domain-specific standards  in line with national guidelines and international best practices</p>
                        </div>
                        <div className="col-md-6 mx-auto text-center card">
                            <h3>Data Platform</h3>
                            <p className="font-secondary text-dark">Public digital infrastructure to share big data and on-site data services </p>
                        </div>
                        <div className="col-md-6 mx-auto text-center card">
                            <h3>Governance</h3>
                            <p className="font-secondary text-dark">Transparent and fair data licensing framework for all</p>
                        </div>
                        <div className="col-md-6 mx-auto text-center card">
                            <h3>Community</h3>
                            <p className="font-secondary text-dark">Mentors, collaborators and partners working together to create value from data</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section help-you">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-title">How can we help you?</h2>
                        </div>
                        <div className="col-lg-12 text-center">
                            <h4 className="section-title">The Mobility DataSpace aims to provide you with </h4>
                        </div>
                        <div className="col-md-4 mx-auto text-center card">
                            <h3>High quality Big Data</h3>
                        </div>
                        <div className="col-md-4 mx-auto text-center card">
                            <h3>Standardised datasets</h3>
                        </div>
                        <div className="col-md-4 mx-auto text-center card">
                            <h3>Real-time data</h3>
                        </div>
                        <div className="col-md-4 mx-auto text-center card">
                            <h3>On-site data services</h3>
                        </div>
                        <div className="col-md-4 mx-auto text-center card">
                            <h3>Open APIs</h3>
                        </div>
                        <div className="col-md-4 mx-auto text-center card">
                            <h3>Easy visualisations</h3>
                        </div>
                        <div className="col-md-4 mx-auto text-center card">
                            <h3>Transparent licensing framework</h3>
                        </div>
                        <div className="col-md-4 mx-auto text-center card">
                            <h3>Data privacy and security by design</h3>
                        </div>
                        <div className="col-md-4 mx-auto text-center card">
                            <h3>Vibrant community of collaborators</h3>
                        </div>
                    </div>
                </div>
            </section>

            <Team/>

            <section id="iscf" className="section iscfellowship">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-title">Supported by the India Smart Cities Fellowship Programme</h2>
                        </div>
                        <div className="col-md-4 mx-auto text-center card">
                            <img src={ISCFLogo} alt="ISCF"/>
                        </div>
                        <div className="col-md-8 mx-auto text-center card">
                            <h4>The India Smart Cities Fellowship is a work-based learning program launched by the Ministry of Housing and Urban Affairs to provide young professionals from diverse fields of engineering, urban planning, architecture, information technology, education, finance and social sector with a platform to drive change.</h4>
                            <a href="https://smartnet.niua.org/iscfip/index.php" target="_blank" className="btn btn-transparent">know more</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default Home;