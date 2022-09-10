import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './assets/App.css';
import './assets/Responsive.css';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header';
import { getApiData } from './utils/Utils';

function App() {
  const [user,setUser] = useState([null]);
  const [cursuses, setCursuse] = useState([]);
  const [show_header,setHeader] = useState(true);
  const [skils,setSkils] = useState([]);
  const [porfolio,setPortfolio] = useState([]);
  const [skilsCategory,setSkilsCategory] = useState([]);
  const [_class , setClass]   = useState('');
  useEffect(() => {
    window.location.pathname == "/" ? setHeader(false) : setHeader(true);
    getApiData('api/civils',setUser,true);
    getApiData('api/cursusresume',setCursuse);
    getApiData('api/user_skils',setSkils);
    getApiData('api/user_portfolios',setPortfolio);
    getApiData('api/user_skils_categories',setSkilsCategory);
  },[]);
  return (
    <div className={"animate__animated "+_class+" animate__delay-2s"}>
      <BrowserRouter>
        {show_header && <Header {...user} setClass={setClass}/>} 
        <Routes>
          <Route path='/' element={<Home {...user}/>} />
          <Route path='/about' element={<About {...user} skils = {skils} skilsCategory={skilsCategory} />} />
          <Route path='/resume' element={<Resume data = {cursuses} />} />
          <Route path='/portfolio' element={<Portfolio portfolio={porfolio} />} />
          <Route path='/contact' element={<Contact {...user} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
