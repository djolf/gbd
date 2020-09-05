import React from 'react';
import './App.scss';
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header/>
      <div className="main">Main content here</div>
      <Footer/>
    </>
  );
}

export default App;
