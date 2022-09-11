import React from 'react'
import { NavLink } from 'react-router-dom';
import '../assets/LaddingPage.css';
import { BASE_UPLOAD, BASE_URL } from '../reactAppEnv';
import { dataType } from '../utils/TypeInterface';


function Home(props:any) : JSX.Element {
    return (
        <div className="kl-home">
            <div className="kl-bag"></div>
            <div className="kl-bar kl-bar-t"></div>
            <div className="kl-bar kl-bar-l"></div>
            <div className="kl-bar kl-bar-r"></div>
            <div className="kl-bar kl-bar-b"></div>
            <div className="container-xl kl-home-contents animate__animated animate__zoomIn">
                <div className="kl-home-contents-left">
                    <div className="kl-left">
                        <p className="kl-color">Bonjour Je suis</p>
                        <h1>{props.profils.name ? props.profils.name + " " + props.profils.firstName : (<img src="assets\image\Dual Ring-1s-24px.gif" alt="load" />)}</h1>
                        <p className="kl-profession">{props.profils.profession ? props.profils.profession : (<img src="assets\image\Dual Ring-1s-24px.gif" alt="load" />)}</p>
                        <p>{props.profils.biographie ? props.profils.biographie : ""}</p>
                        <div className="kl-btn-container">
                            <NavLink  title="about"  className="btn" to={"/about"} onClick={() => props.setShowHeader(true)}>Apropos</NavLink>
                            <a className="btn" target='_blanck' href={props.profils.ciriculumVitae ? BASE_URL+"uploads/"+props.profils.ciriculumVitae : '#' }>Télécharger CV <span><i className="far fa-download"></i></span></a>
                        </div>
                    </div>
                </div>
                <div className="kl-home-contents-right">
                    <figure>
                        <img src={props.profils.profilsPath ? BASE_UPLOAD+props.profils.profilsPath :"assets/image/aboutee.png"} alt="profil" />
                        <div className="kl-deco"></div>  
                    </figure>
                     
                </div>
            </div>
        </div>
    )
}

export default Home;


