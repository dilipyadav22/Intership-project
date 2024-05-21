import ReactDom from 'react-dom/client'
import React from 'react';
import Header from './src/Header';
import './style.css';
import Body from './src/Body';
import Footer from './src/Footer';

const Applayout=()=>{
    return(
        <div className='App' >
               <Header/>
               <Body/>
               <Footer/>
          </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Applayout/>)