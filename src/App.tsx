import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import './assets/App.css';
import './assets/Responsive.css';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header';
import { getDataType } from './utils/TypeInterface';
import { initialData } from './utils/constants';
import PageNotFound from './pages/PageNotFound';



export const userContext = createContext(initialData);
function App() {
  const [showHeader,setHeader] = useState(false);
  const [data, setData]        = useState(initialData);
  const [_class , setClass]    = useState('');

  const getData:getDataType = async () => {
    try {
      const response = fetch('data.json', {
        headers: {
          'content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method:'GET'
      });
      const data = (await response).json();
      data.then(e => setData(last => e));
      if (!(await response).ok) throw new Error((await response).statusText);
    } catch (error) {
      console.log("Error :"+error);
    } 
  }
  useEffect(() => {
    window.location.pathname == "/" ? setHeader(false) : setHeader(true);
      getData();   
  },[]);
  return (
    <userContext.Provider value={data}>
      <div className={"animate__animated "+_class+" animate__delay-2s"}>
        <BrowserRouter> 
         {showHeader && <Header data={data} setShowHeader={setHeader} /> }
          <Routes>
            <Route path='/' element={<Home profils={data.profils} setShowHeader={setHeader}/>} />
            <Route path='/about' element={<About  />}/>
            <Route path='/resume' element={<Resume  />} />
            <Route path='/portfolio' element={<Portfolio  />} />
            <Route path='/contact' element={<Contact  />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>

        </BrowserRouter>
      </div>
    </userContext.Provider >

  );
}
export const Button = ({onClick, children} : any) => (
  <button onClick={onClick}>{children}</button>
)

export default App;
