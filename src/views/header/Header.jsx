import React, { useEffect, useRef } from 'react';

import Logo from './logo-03.svg'
import './Header.scss';

function Header() {
    const headerRef = useRef(null)

    function handleScroll(event) {
        if(window.scrollY > 100) {
            headerRef.current.classList.add('nav-bg');
        }
        else {
            headerRef.current.classList.remove('nav-bg');
        }
        
        /* let scrollTop = event.srcElement.body.scrollTop,
            itemTranslate = Math.min(0, scrollTop/3 - 60);

        this.setState({
        transform: itemTranslate
        }); */
    }

    useEffect(() => {
        document.body.addEventListener('wheel', handleScroll);
    }, [])

    return (
        <header className="navigation fixed-top" ref={headerRef}>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand font-tertiary h3" href="index.html"><img className="logo" src={Logo} alt="Myself"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
                aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-center" id="navigation">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#team">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#iscf">ISCF</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footer">Contact</a>
                    </li>
                </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
