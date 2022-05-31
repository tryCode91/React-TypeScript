import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import Intro from "./components/Introduktion";
import Invite from "./components/Invite";
import List from "./components/List";
import NavBar from "./components/NavBar";

import { Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  //IState är värden som defineras i interfacet. Interface definerar vilka värden den förväntas sig ta emot.
  //Sedan passas interface in till state.

  return (
    <React.Fragment>
      <NavBar />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Invite"} element={<Invite />} />
        <Route path={"/About"} element={<About />} />
        <Route path={"/Contact"} element={<Contact />} />
      </Routes>
      
    </React.Fragment>
  );
}

export default App;
