import React from 'react'
import CursusResume from '../components/CursusResume'
import Description from '../components/Description'
import Header from '../components/Header'

function Resume() {  
  return (
      <div className='container-lg mb-5'>
           <section className="kl-about-body">
                <Description _title="Resumé des parcours" _more="" />
            </section>
          <CursusResume />
      </div>  
  )
}

export default Resume