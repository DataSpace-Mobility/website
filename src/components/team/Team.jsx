import React from 'react';
import { AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';

import './Team.scss'

import AbhiProfile from './img/abhi.png'
import AparnaProfile from './img/aparna.png'
import ManuelProfile from './img/manuel.png'

function Team() {
    return(
        <>
            <section id="team" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-title">Meet our amazing team</h2>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                            <div className="card shadow text-center">
                                <div className="position-relative rounded-top progress-wrapper" data-color="#fdb157">
                                    <img className="profile-img" src={AbhiProfile}/>
                                </div>
                                <div className="card-footer bg-white">
                                    <h3 className="card-title">Abhishek<br/>Upperwal</h3>
                                    <p><b>Data Scientist</b><br/>IISc Bangalore</p>
                                    <div>
                                        <a className="personal-social" href="https://twitter.com/upperwal" target="_blank"><AiFillTwitterSquare/></a>
                                        <a className="personal-social" href="https://www.linkedin.com/in/upperwal/" target="_blank"><AiFillLinkedin/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                            <div className="card shadow text-center">
                                <div className="position-relative rounded-top progress-wrapper" data-color="#9473e6">
                                    <img className="profile-img" src={AparnaProfile}/>
                                </div>
                                <div className="card-footer bg-white">
                                    <h3 className="card-title">Aparna<br/>Ramesh</h3>
                                    <p><b>Architect and Urban Planner</b><br/>CEPT University, Ahmedabad</p>
                                    <div>
                                        {/* <a className="personal-social" href=""><AiFillTwitterSquare/></a> */}
                                        <a className="personal-social" href="www.linkedin.com/in/aparna237"><AiFillLinkedin/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                            <div className="card shadow text-center">
                                <div className="position-relative rounded-top progress-wrapper" data-color="#bdecf6">
                                    <img className="profile-img" src={ManuelProfile}/>
                                </div>
                                <div className="card-footer bg-white">
                                    <h3 className="card-title">Manuel<br/>Diego</h3>
                                    <p><b>Architect</b><br/>University of Nottingham, England</p>
                                    <div>
                                        {/* <a className="personal-social" href="/"><AiFillTwitterSquare/></a> */}
                                        <a className="personal-social" href="https://www.linkedin.com/in/mdfcp/"><AiFillLinkedin/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team;
