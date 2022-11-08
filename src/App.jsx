import Install from './components/Install';
import Home from './components/Home';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contacts";
import About from "./pages/About"
import NFT from "./pages/NFT"
import "./App.css";


function App() {
  if (window.ethereum) {
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="nft" element={<NFT />} />
        </Route>
      </Routes>
    </BrowserRouter>)
  } else {
    return <Install />
  }
}

export default App;