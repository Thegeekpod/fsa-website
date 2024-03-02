import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-area bg-gray">

<div className="footer-top">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="widget widget_contact">
          <h4 className="widget-title">Contact Us</h4>
          <ul className="details">
            <li>
              <i className="fa fa-map-marker" /> 420 Love Sreet 133/2 Street
              NewYork
            </li>
            <li>
              <i className="fa fa-envelope" /> info.contact@gmail.com
            </li>
            <li>
              <i className="fa fa-phone" /> 012 345 678 9101
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="widget widget_nav_menu">
          <h4 className="widget-title">Course</h4>
          <ul>
            <li>
              <a href="course.html">Foundational</a>
            </li>
            <li>
              <a href="course.html">Competition Programs </a>
            </li>
            <li>
              <a href="course.html">Career Programs</a>
            </li>
            <li>
              <a href="course.html">Competitions after UG/PG</a>
            </li>
          
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="widget widget_blog_list">
          <h4 className="widget-title">Useful Links </h4>
          <ul>
            <li>
              <a href="course.html">Terms and Condition</a>
            </li>
            <li>
              <a href="course.html">Privici Policy</a>
            </li>
            <li>
              <a href="course.html">Refund Policy</a>
            </li>
            <li>
              <a href="course.html">Faq</a>
            </li>
          
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="widget widget_contact">
          <h4 className="widget-title">Twitter Feed</h4>
          <ul className="details">
            <li>
              <i className="fa fa-twitter" />
              Simply dummy brand <a href="#">https//tweets/c3l.com</a>
              <div className="time">9 Hours ago</div>
            </li>
            <li>
              <i className="fa fa-twitter" />
              Simply dummy brand <a href="#">https//tweets/c7l.com</a>
              <div className="time">9 Hours ago</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="footer-bottom">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 align-self-center">
        <a href="index.html">
          <img src="/assets/img/footer-logo.png" alt="img" />
        </a>
      </div>
      <div className="col-lg-4  col-md-6 order-lg-12 text-md-right align-self-center">
        <ul className="social-media mt-md-0 mt-3">
          <li>
            <a className="facebook" href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a className="twitter" href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a className="instagram" href="#">
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li>
            <a className="youtube" href="#">
              <i className="fa fa-youtube" />
            </a>
          </li>
          <li>
            <a className="pinterest" href="#">
              <i className="fa fa-pinterest" />
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 order-lg-8 text-lg-center align-self-center mt-lg-0 mt-3">
        <p>copyright 2024 All right Reserved</p>
      </div>
    </div>
  </div>
</div>
</footer>
  )
}

export default Footer