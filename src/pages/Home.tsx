import React from 'react'
import { NavLink } from 'react-router-dom';
import '../assets/LaddingPage.css';
import { BASE_UPLOAD, BASE_URL } from '../reactAppEnv';


function Home(user:any) {
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
                        <h1>{user.name ? user.name + " " + user.firstName : (<img src="assets\image\Dual Ring-1s-24px.gif" alt="load" />)}</h1>
                        <p className="kl-profession">{user.profession ? user.profession : (<img src="assets\image\Dual Ring-1s-24px.gif" alt="load" />)}</p>
                        <p>{user.biographie ? user.biographie : ""}</p>
                        <div className="kl-btn-container">
                            <NavLink  title="about"  className="btn" to={"/about"} onClick={window.location.reload}>Apropos</NavLink>
                            <a className="btn" target='_blanck' href={user.ciriculumVitae ? BASE_URL+"uploads/"+user.ciriculumVitae : '#' }>Download CV <span><i className="far fa-download"></i></span></a>
                        </div>
                    </div>
                </div>
                <div className="kl-home-contents-right">
                    <figure>
                        <img src={user.profilsPath ? BASE_UPLOAD+user.profilsPath :"assets/image/aboutee.png"} alt="profil" />
                        <div className="kl-deco"></div>  
                    </figure>
                     
                </div>
            </div>
        </div>
    )
}

export default Home;


