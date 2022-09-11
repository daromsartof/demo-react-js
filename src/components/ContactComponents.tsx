import style from '../style/style'
import "../assets/forms-style.css"
import React, { useEffect, useState,useContext,useRef } from 'react';
import "../assets/Portfolio.css";
import { userContext } from '../App';
import emailjs from '@emailjs/browser';

function ContactComponents() {
    
    const form = React.useRef<HTMLFormElement>(null);

    const sendEmail = (e:any) => {
      e.preventDefault();
      setIsLoading(true)
      if (!form.current) return ;
      const formData = new FormData(form.current);
      const regeX =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      let userEmail:any = formData.get('user_email');
      if(!regeX.test(userEmail)){
          setIsLoading(false);
          return;
      } else{
        emailjs.sendForm('service_silmw6y', 'template_9v1nfoy', form.current ? form.current: '', '9adl0OChABWUnGDvt')
        .then((result) => {
            setIsLoading(false)
            setStatus('success')
        }, (error) => {
            setIsLoading(false)
            setStatus('error')
        });
      }
    };
  
    var date = new Date();
    const [_success, setSuccess] = useState<boolean>(false);
    const [minheight, setminHeight] = useState<number>();
    const [_name, setName] = useState<string>("");
    const { data } = useContext(userContext); 
    const [isLoading,setIsLoading] = useState(false);
    const [status,setStatus] = useState('hide');
    

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
                    <ul className='kl-contact-left' style={{ minHeight: minheight , }}>
                        <li><span style={style.ThemeColor}>Adresse</span><p>{data.profils.address ? data.profils.address : (<img src="assets\image\Dual Ring-1s-24px.gif" alt="load" />)}</p></li>
                        <li><span style={style.ThemeColor}>Téléphone</span><p>{data.profils.phone ? data.profils.phone : (<img src="assets\image\Dual Ring-1s-24px.gif" alt="load" />)}</p></li>
                        <li><span style={style.ThemeColor}>Email</span><p>{data.profils.email ? data.profils.email : (<img src="assets\image\Dual Ring-1s-24px.gif" alt="load" />)}</p></li>
                        <li><span style={style.ThemeColor}>Réseaux sociaux</span>
                            <ul className='kl-reseau-sociaux'>
                                <li><a href={"https://twitter.com/" + data.profils.social.twitter} target={"_blank"} rel="noreferrer" className="twitter" ><i className="fab fa-twitter-square"></i></a></li>
                                <li><a href={"https://github.com/" + data.profils.social.github} target={"_blank"} rel="noreferrer" className="linkedin"><i className="fab fa-github-square"></i></a></li>
                                <li><a href={"https://gitlab.com/" + data.profils.social.gitlab} target={"_blank"} rel="noreferrer" className="linkedin"><i className="fab fa-gitlab"></i></a></li>
                                <li><a href={"https://www.facebook.com/" + data.profils.social.facebook} target={"_blank"} rel="noreferrer" className="facebook"><i className="fab fa-facebook-square"></i></a></li>
                                <li><a href={"https://www.linkedin.com/" + data.profils.social.linkdln} target={"_blank"} rel="noreferrer" className="linkedin"><i className="fab fa-linkedin"></i></a></li>

                            </ul>
                        </li>
                        <li style={{paddingTop:10}}>
                            {status == 'success' ?
                            <div className="alert alert-success animate__animated animate__bounceIn">
                                <strong>Envoyé avec succès !</strong> Merci pour votre message.
                            </div> : status == 'error' &&
                            <div className="alert alert-danger animate__animated animate__bounceIn">
                                <strong>Danger!</strong> Une Erreur s'est produits.
                            </div>  
                            }
                        </li>
                    </ul>
                </div>
                <div className='col-lg-9' >
                    <form className='kl-forms' ref={form} style={{ minHeight: minheight }} id="id-forms" onSubmit={sendEmail}>
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
                                {"Envoyer"}{isLoading && <img src="assets\image\Dual Ring-1s-24px.gif" alt="load" />} 
                            </button>
                        </div>
                        
                    </form>
                </div>

            </div>

        </div>
    )
}
export default ContactComponents;