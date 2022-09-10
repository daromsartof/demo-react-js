
import React from 'react';
import Description from './Description'

function Civils(_data:any) {
    
    
    const formatDate = (dateString:string) => {
        var date:any    = dateString.slice(0,10).split('-');
        var now         = new Date(date[0],date[1]- 1,date[2]);
        var options:any = { year: 'numeric', month: 'long', day: 'numeric' };
        return now.toLocaleDateString("fr", options);
    }
    return (
        <section className="kl-about-body">
            <Description _title="Abouts" _more="" />
            <div className="row kl-civil">
                <div className="col-lg-6">
                    <div className="kl-civil-about-left animate__animated animate__bounceInUp  animate__delay-1s" >
                        <div className="kl-bar-top">
                            <div className="kl-progress">
                                <ul className="kl-progress-bar-wrap">
                                    <li></li><li></li><li></li><li></li><li></li>
                                </ul>
                            </div>
                        </div>
                        <ul className="kl-civil-content">
                            <li><span>Date de naissance : </span>{_data.birthdays ? formatDate(_data.birthdays) :(<img style={{maxWidth:"24px"}} src="assets\image\Dual Ring-1s-24px.gif" alt="load"/>)}</li>
                            <li><span>Téléphone : </span><a style={{textDecoration:"none",color:"black"}} href={'tel:'+_data.phone} title={"call me"} >{_data.phone?_data.phone:(<img style={{maxWidth:"24px"}} src="assets\image\Dual Ring-1s-24px.gif" alt="load"/>)}</a></li>
                            <li><span>Pays :</span>{_data.city ?_data.city:(<img style={{maxWidth:"24px"}} src="assets\image\Dual Ring-1s-24px.gif" alt="load"/>)}</li>
                        </ul>
                        <div className="kl-bar-bottom">
                            <div className="kl-progress">
                                <div className="kl-progress-bar-wrap">
                                    <div id="id-1" className="kl-progress-bar"></div>
                                </div>
                            </div>
                            <div className="kl-progress">
                                <div className="kl-progress-bar-wrap">
                                    <div id="id-2" className="kl-progress-bar"></div>
                                </div>
                            </div>
                            <div className="kl-progress">
                                <div className="kl-progress-bar-wrap">
                                    <div id="id-3" className="kl-progress-bar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="kl-civil-about-right animate__animated animate__bounceInDown  animate__delay-1.5s">
                        <div className="kl-trait"></div>
                        <ul className="kl-civil-content">
                            <li><span>Âge : </span>{_data.userOld ? _data.userOld :(<img style={{maxWidth:"24px"}} src="assets\image\Dual Ring-1s-24px.gif" alt="load"/>)}</li>
                            <li><span>Email : </span><a style={{textDecoration:"none",color:"black"}} title={_data.email} href={"mailto:"+_data.email}>{_data.email?_data.email:(<img style={{maxWidth:"24px"}} src="assets\image\Dual Ring-1s-24px.gif" alt="load"/>)}</a></li>
                            <li><span>Diplôme :</span>{_data.degree?_data.degree:(<img style={{maxWidth:"24px"}} src="assets\image\Dual Ring-1s-24px.gif" alt="load"/>)}</li>
                        </ul>
                        <div className="kl-dots">
                            <ul className="kl-dots-wrap">
                                <li></li><li></li><li></li><li></li><li></li>
                                <li></li><li></li><li></li><li></li><li></li><li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Civils