import React from 'react';
import './App.scss';
import { Footer } from "./components/Footer";
import { ContentGrid } from './components/ContentGrid';
import HeaderWrapper from './containers/HeaderWrapper';

const App = () => {
  return (
    <>
      <HeaderWrapper/>
      <ContentGrid/>
      <Footer/>
    </>
  );
}

export default App;
