import React, { useEffect } from 'react'
import Menu from './Menu'
import Menu2 from './Menu2'

import { NavLink } from 'react-router-dom'

const Header = () => {
  useEffect(() => {
    // Function to find and style the "Powered by" text
    const stylePoweredBy = () => {
      const poweredByElements = document.querySelectorAll('div[id="google_translate_element"] span.goog-te-section');

      // Loop through all elements with the class "goog-te-section"
      poweredByElements.forEach(element => {
        // Check if the element's innerHTML contains the text "Powered by"
        if (element.innerHTML.includes('Powered by')) {
          // Change the color of the text to red
          element.style.color = 'red';
        }
      });
    };
    stylePoweredBy()
  }, []);

  return (
    <>
      {/* navbar start */}
      <div className="navbar-area">
        {/* navbar top start */}
        <div className="navbar-top">
          <div className="container">
            <div className="row">
              <div className="col-md-8 text-md-left text-center">

                <ul>
                  <li>
                    <p>
                      <i className="fa fa-map-marker" /> 2072 Pinnickinick Street,
                      WA 98370
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fa fa-envelope-o" /> info@website.com
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="topbar-right text-md-right text-center">
                  <li className="social-area">
                    {/* <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                <a href="#">
                  <i className="fa fa-pinterest" aria-hidden="true" />
                </a> */}
                    <div id="google_translate_element"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-area-1 navbar-area navbar-expand-lg">
          <div className="container nav-container">
            <div className="responsive-mobile-menu">
              <button
                className="menu toggle-btn d-block d-lg-none"
                data-target="#edumint_main_menu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-left" />
                <span className="icon-right" />
              </button>
            </div>
            <div className="logo">
              <a href="index.html">
                <img src="/assets/img/logo.png" alt="img" />
              </a>
            </div>
            <div className="nav-right-part nav-right-part-mobile">
              <a className="signin-btn" href="signin.html">
                Sign In
              </a>
              <a className="btn btn-base" href="signup.html">
                Sign Up
              </a>

            </div>
            <div className="collapse navbar-collapse" id="edumint_main_menu">
              <Menu />
            </div>
            <div className="nav-right-part nav-right-part-desktop">
              <a className="signin-btn" href="signin.html">
                Sign In
              </a>
              <a className="btn btn-base" href="signup.html">
                Sign Up
              </a>

            </div>
          </div>

        </nav>

        <div className="menu-degrees navbar-area">
          <div className='container'>
          <Menu2 />
          </div>
          
        </div>

      </div>

     

    </>
  )
}

export default Header