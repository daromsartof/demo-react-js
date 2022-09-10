import React from 'react';
import Civils from '../components/Civils';
import Header from '../components/Header';
import Skills from '../components/Skills';

function About(props:any) {  
  return (
    <>
    <Header data={props.data} setClass={props.setClass}/>  
    <div>
        <div className='container-lg'>
            <Civils />
            <Skills />
        </div>
    </div>
    </>
  )
}

export default About