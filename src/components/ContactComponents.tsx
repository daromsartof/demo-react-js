import style from '../style/style'
import "../assets/forms-style.css"
import React, { useEffect, useState } from 'react';
import "../assets/Portfolio.css"

function ContactComponents(_data: any) {
    const sendEmail = (e: any) => {
        e.preventDefault();
        

        // emailjs.sendForm("service_q1frvag", "template_85aspz9", "#id-forms", "QSLA8g9okiFVR0Jcs")
        //     .then((result?: any) => {
        //         setSuccess(true);
        //         document.querySelector('.kl-profil img')?.setAttribute('src', 'assets/image/profils.jpg');
        //     }, (error: any) => {
        //         setSuccess(false);

        //     });
    };
    var date = new Date();
    const [_success, setSuccess] = useState<boolean>(false);
    const [minheight, setminHeight] = useState<number>();
    const [_name, setName] = useState<string>("");
    useEffect(() => {
        const leftHeight = document.getElementsByClassName("kl-contact-left")[0].clientHeight;
        const rightHeiht = document.getElementsByClassName("kl-forms")[0].clientHeight;
        setminHeight(heightcalcul(leftHeight, rightHeiht))
    }, []);
    const heightcalcul = (leftHeight: number, rightHeiht: number) => {
        if (leftHeight > rightHeiht) {
            return leftHeight
        } else {
            return rightHeiht
        }
    }
    return (
        <div>
            <div className='row'>
                <div className='col-lg-3'>
                    <ul className='kl-contact-left' style={{ minHeight: minheight }}>
                        <li><span style={style.ThemeColor}>Adresse</span><p>{_data.address ? _data.address : (<img src="assets\image\Dual Ring-1s-24px.gif" alt="load" />)}</p></li>
                        <li><span style={style.ThemeColor}>Telephone</span><p>{_data.phone ? _data.phone : (<img src="assets\image\Dual Ring-1s-24px.gif" alt="load" />)}</p></li>
                        <li><span style={style.ThemeColor}>Email</span><p>{_data.email ? _data.email : (<img src="assets\image\Dual Ring-1s-24px.gif" alt="load" />)}</p></li>
                        <li><span style={style.ThemeColor}>Reseaux sociaux</span>
                            <ul className='kl-reseau-sociaux'>
                                <li><a href={"https://twitter.com/" + _data.twitter} target={"_blank"} rel="noreferrer" className="twitter" ><i className="fab fa-twitter-square"></i></a></li>
                                <li><a href={"https://github.com/" + _data.github} target={"_blank"} rel="noreferrer" className="linkedin"><i className="fab fa-github-square"></i></a></li>
                                <li><a href={"https://gitlab.com/" + _data.gitlab} target={"_blank"} rel="noreferrer" className="linkedin"><i className="fab fa-gitlab"></i></a></li>
                                <li><a href={"https://www.facebook.com/" + _data.facebook} target={"_blank"} rel="noreferrer" className="facebook"><i className="fab fa-facebook-square"></i></a></li>
                                <li><a href={"https://www.linkedin.com/" + _data.linkdln} target={"_blank"} rel="noreferrer" className="linkedin"><i className="fab fa-linkedin"></i></a></li>

                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-9' >
                    <form className='kl-forms' style={{ minHeight: minheight }} id="id-forms" onSubmit={sendEmail}>
                        {_name && (
                            <p className='animate__animated animate__slow animate__fadeIn'>{date.getHours() > 12 ? "bonsoir " : "bonjour "}<span>{_name}</span>, Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquam veritatis perferendis quidem voluptates consectetur natus, perspiciatis alias et consequatur maiores, qui similique officia reiciendis, accusantium facilis sequi reprehenderit! Magnam?</p>
                        )}
                        <div className='row' style={{ margin: "20px 0px" }}>
                            <div className='col-lg-6' >
                                <input style={{ margin: "20px 0px" }} required typeof='text' onChange={(e) => setName(e.target.value)} placeholder='Nom' name="user_name" />
                            </div>
                            <div className='col-lg-6'>
                                <input style={{ margin: "20px 0px" }} required typeof='email' placeholder='Email' name="user_email" />
                            </div>
                        </div>
                        <div className='row' style={{ margin: "20px 0px" }}>
                            <div className='col-12'>
                                <textarea rows={9} name="message" required placeholder='Message'></textarea>
                            </div>
                        </div>
                        <div className='row d-flex' style={{ justifyContent: "center", margin: "20px 0px" }} >
                            <button type="submit">
                                {"Envoyer"}
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}
export default ContactComponents;