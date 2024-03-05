import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-area bg-black">

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_contact">
                <h4 className="widget-title text-white">About Us</h4>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit lor sit amet .</p>
                <a
                      className="btn btn-base b-animate-3 mr-sm-3 mr-2 mt-3"
                      href="contact.html"
                      id='aboutRead-btn'
                     
                    >
                      Read More
                    </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title text-white">Course</h4>
                <ul>
                  <li className="text-white">
                    <a href="course.html">Foundational</a>
                  </li>
                  <li className="text-white">
                    <a href="course.html">Competition Programs </a>
                  </li>
                  <li className="text-white">
                    <a href="course.html">Career Programs</a>
                  </li>
                  <li className="text-white">
                    <a href="course.html">Competitions after UG/PG</a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_blog_list">
                <h4 className="widget-title text-white">Useful Links </h4>
                <ul>
                  <li className="text-white">
                    <a href="/terms-condition">Terms and Condition</a>
                  </li>
                  <li className="text-white">
                    <a href="/privacy-policy">Privicy Policy</a>
                  </li>
                  <li className="text-white">
                    <a href="/refund-policy">Refund Policy</a>
                  </li>
                  <li className="text-white">
                    <a href="/faq">Faq</a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
            <div className="widget widget_contact">
                <h4 className="widget-title text-white">Contact Us</h4>
                <ul className="details">
                  <li className="text-white">
                    <i className="fa fa-map-marker" /> 420 Love Sreet 133/2 Street
                    NewYork
                  </li>
                  <li className="text-white">
                    <i className="fa fa-envelope" /> info.contact@gmail.com
                  </li>
                  <li className="text-white">
                    <i className="fa fa-phone" /> 012 345 678 9101
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom" style={{ background: "black" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 align-self-center">
              <a href="index.html">
                <img src="/assets/img/footer-logo.png" alt="img" width={120}/>
              </a>
            </div>
            <div className="col-lg-4  col-md-6 order-lg-12 text-md-right align-self-center">
              <ul className="social-media mt-md-0 mt-3">
                <li className="text-white">
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="text-white">
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="text-white">
                  <a className="instagram" href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="text-white">
                  <a className="youtube" href="#">
                    <i className="fa fa-youtube" />
                  </a>
                </li>
                <li className="text-white">
                  <a className="pinterest" href="#">
                    <i className="fa fa-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 order-lg-8 text-lg-center align-self-center mt-lg-0 mt-3">
              <p className='text-white'>copyright 2024 All right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer