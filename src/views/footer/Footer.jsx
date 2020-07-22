import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

import Logo from '../header/logo-03.svg'

import './Footer.scss';

function Footer() {
    return(
        <section id="footer" className="footer">
            <div className="row">
                <div className="col-md-4">
                    <a className="navbar-brand font-tertiary h3" href="index.html"><img className="logo" src={Logo} alt="Myself"/></a>
                </div>
                <div className="col-md-8 main-window">
                    <h3>Do you have an amazing idea for your city and want to collaborate? <br/><br/>We want to talk to you!</h3>
                    <h5>Reach out to us at <a href="mailto:hi@dataspace.mobi"><code>hi@dataspace.mobi</code></a></h5>
                </div>
            </div>
            <small>Made in India with <AiFillHeart className="heart-color"/> from <b>Government of India</b></small>
            <small>&copy; Ministry of Housing and Urban  Affairs</small>
        </section>
    )
}

export default Footer;