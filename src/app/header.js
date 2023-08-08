import Link from 'next/link';
import { useState } from 'react';
export default function Header() {

    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header>
            <nav className="navbar header navbar-expand-lg fixed-top">
                <div className="container">
                    <a className="navbar-brand fs-4 fw-bold" id='link-main' href="#">Personal Profile</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="bi" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path> </svg>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href='#home' className='nav-link fs-6 fw-bold' id='link-menu' >Home</a>
                            </li>
                            <li className="nav-item">
                                <a href='#aboutme' className='nav-link fs-6 fw-bold' id='link-menu' >About Me</a>
                            </li>
                            <li className="nav-item">
                                <a href='#myexperiences' className='nav-link fs-6 fw-bold' id='link-menu' >My Experiences</a>
                            </li>
                            <li className="nav-item dropdown"
                                onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)}
                            >
                                <Link className='nav-link dropdown-toggle fs-6 fw-bold' id='link-menu' role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">Project & Contact</Link>
                                <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}
                                    style={{ left: 0 }}
                                    onMouseEnter={() => setShowDropdown(true)}
                                    onMouseLeave={() => setShowDropdown(false)}
                                >
                                    <li><a className="dropdown-item" href="#project">Project</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}