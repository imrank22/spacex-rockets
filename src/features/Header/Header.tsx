import React from 'react';
import logo from '../../assets/images/spacex.webp'

const Header: React.FC = () => {
    return (
        <header>
            <nav id="navbarExample" className="manual-nav navbar navbar-expand-lg fixed-top navbar-dark" aria-label="Main navigation">
                <div className="container">

                    <a className="navbar-brand logo-image" href="index.html">
                        <img src={logo} width={500} height={400} alt="spacex_logo" />
                    </a>

                    {/* <!-- Text Logo - Use this if you don't have a graphic logo --> */}
                    {/* <a className="navbar-brand logo-text" href="index.html">Vera</a> */}

                    <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ms-auto navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link" href="#header">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#solutions">Solutions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#details">Details</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#expertise">Expertise</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                    <li><a className="dropdown-item" href="article.html">Article Details</a></li>
                                    <li><div className="dropdown-divider"></div></li>
                                    <li><a className="dropdown-item" href="terms.html">Terms Conditions</a></li>
                                    <li><div className="dropdown-divider"></div></li>
                                    <li><a className="dropdown-item" href="privacy.html">Privacy Policy</a></li>
                                </ul>
                            </li>
                        </ul>
                        <span className="nav-item social-icons">
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span className="fa-stack">
                                <a href="#your-link">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default React.memo(Header);