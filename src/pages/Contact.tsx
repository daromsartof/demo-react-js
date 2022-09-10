import React from 'react'
import ContactComponents from '../components/ContactComponents'
import Description from '../components/Description'


function Contact(_data:any) {
  return (
    <div>
        <div className='container-lg'>
            <section className="kl-about-body">
                <Description _title="Contact" _more= "" />
            </section>
            <ContactComponents {..._data} />
        </div>
    </div>
  )
}

export default Contact