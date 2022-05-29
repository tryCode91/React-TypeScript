import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import Intro from './components/Introduktion';
import Invite from './components/Invite';
import List from './components/List'
import NavBar from './components/NavBar';

import {Routes, Route, Navigate} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';


function App() {



  //IState är värden som defineras i interfacet. Interface definerar vilka värden den förväntas sig ta emot.
  //Sedan passas interface in till state.


  //definerar typer




  return (
    <React.Fragment>
        
            <NavBar />
           

            <Routes>
             
             
              <Route path={'/'} element={'/'} />


              <Route path={'/Home'} element={<Home />} />
              
              <Route path={'/Invite'} element={<Invite />} />




        
              <Route path={'/About'} element={<About />} />



            </Routes>    
       
        
   
    </React.Fragment>
  );
}

export default App;
