import React from 'react'
import ContactComponents from '../components/ContactComponents'
import Description from '../components/Description'
import Header from '../components/Header'


function Contact(props:any) {
  return (
    <>
    <Header data={props.data} setClass={props.setClass}/> 
    <div>
        <div className='container-lg'>
            <section className="kl-about-body">
                <Description _title="Contact" _more= "" />
            </section>
            <ContactComponents />
        </div>
    </div>
    </>
  )
}

export default Contact