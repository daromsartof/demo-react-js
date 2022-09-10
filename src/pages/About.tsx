import React from 'react';
import Civils from '../components/Civils';
import Skills from '../components/Skills';

function About(_user:any) {  
  return (  
    <div>
        <div className='container-lg'>
            <Civils {..._user}/>
            <Skills _skils = {_user.skils} skilsCategory={_user.skilsCategory}/>
        </div>
    </div>
  )
}

export default About