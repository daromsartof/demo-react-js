import { NavLink } from "react-router-dom";
import React, { useContext, useState } from 'react';
import { userContext } from "../App";
import { BASE_UPLOAD } from "../utils/constants";
function Header (props:any) { 
    return (
        <>
            <div className="kl-header">
                <div className="kl-header-content">
                    <div className="kl-custom-container w-100" style={{position:'relative'}}>
                        <div className="container">
                            <header>
                                <div className="kl-info kl-info-about">
                                    <figure className="kl-profil" style={{ backgroundColor: "#f9f9f9" }}>
                                        <img src={props.profilsPath ? BASE_UPLOAD+props.profilsPath :"assets/image/aboutee.png"} alt="profil" />
                                    </figure>
                                    <div>
                                        <h1>{props.data.profils ? props.data.profils.name + " " + props.data.profils.firstName : (<img src="assets\image\Dual Ring-1s-24px.gif" alt="load" />)}</h1>
                                        <p>{props.data.profils ? props.data.profils.profession : (<img src="assets\image\Dual Ring-1s-24px.gif" alt="load" />)}</p>
                                    </div>
                                   
                                </div>

                            </header>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-sm kl-navigation kl-container">
                <div className="container-fluid">
                    <div className="navbar-toggler kl-btn-toggler" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <div>
                            <ul><li></li><li></li><li></li></ul>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="kl-navigation-list">
                            <li className="kl-nav-item "><NavLink  title="about" className={(nav) => (nav.isActive ? 'active' : '')} to="/about">A propos</NavLink></li>
                            <li className="kl-nav-item "><NavLink  title="resume" className={(nav) => (nav.isActive ? 'active' : '')} to="/resume">Resumé</NavLink></li>
                            <li className="kl-nav-item"><NavLink  title="portfolio" className={(nav) => (nav.isActive ? 'active' : '')} to="/portfolio">Portfolio</NavLink></li>
                            <li className="kl-nav-item"><NavLink  title="contact" className={(nav) => (nav.isActive ? 'active' : '')} to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className="home-navigate" style={{fontSize:20,padding:"0px 10px"}} >
                        <NavLink title="home" to={"/"} onClick={() => props.setShowHeader(false) }><i className="fal fa-home-alt"></i></NavLink>   
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
