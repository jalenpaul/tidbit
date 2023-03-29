import './Header.css';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { useMediaQuery } from 'react-responsive';



export default function Header() {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById('header').style.visibility = "hidden";
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById('header').style.visibility = "visible";
    }

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

    const helmetContext = {};
    return (
       <HelmetProvider context={helmetContext}>

        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Demos</a>
          <a href="#">Contact</a>
        </div>

        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>PassionIT</title>
          <meta name="description" content="Digital solutions, guided by innovation, with a passion for IT" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Helmet>

        <div id='#header'>
            <header>
                <div>
                    <img/>
                </div>
                <div>
                    <button id="b_profile_name" className="IconBtn">
                    <i id="ic_profile" className="material-icons large">account_circle</i>
                    </button>
                    <button id="b_profile_sideMenu" onClick={openNav} className="IconBtn">
                    <i id="ic_hamburger" className="material-icons large">dehaze</i>
                    </button>
                    {isPortrait && 
                        <div>
                            
                        </div>
                    }
                </div>
            </header>
        </div>
       </HelmetProvider>
    )
}