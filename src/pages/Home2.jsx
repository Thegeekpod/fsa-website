import React from 'react'
import Menu2 from '../component/Menu2'
import { Link } from 'react-router-dom'

const Home2 = () => {
  return (
    <>



      {/* banner start */}
      <div className="banner-area banner-area-1 bg-gray">

        <div className="menu-degrees">
          <Menu2 />
        </div>


        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8 order-lg-12 align-self-center">
              <div className="thumb b-animate-thumb">
                <img src="/assets/img/banner/1.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-7 order-lg-1 align-self-center">
              <div className="banner-inner text-center text-lg-left mt-5 mt-lg-0">
                {/* <h6 className="b-animate-1 sub-title">DISCOVER RESEARCH</h6> */}
                <h1 className="b-animate-2 title">
                  Career is the biggest risk today. Recognise
                </h1>
                <p>Many are failing, mired in confusion about the choice of career <br />Trust us for the finest advice on careers in the world caught in man-machine conundrum.</p>
                <a
                  className="btn btn-base b-animate-3 mr-sm-3 mr-2"
                  href="contact.html"
                >
                  Get A Quote
                </a>
                <a className="btn btn-border-black b-animate-3" href="blog.html">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-area banner-area-dd bg-blue">
        <div className="container">
          <div className="row justify-content-center" style={{ flexDirection: 'row-reverse' }}>
            <div className="col-lg-7 order-lg-1 align-self-center">
              <div className="banner-inner text-center text-lg-left mt-5 mt-lg-0">
                {/* <h6 className="b-animate-1 sub-title">DISCOVER RESEARCH</h6> */}
                <h1 className="b-animate-2 title white-text">
                  Apply Science to the Art of making Career
                </h1>
                <p className='white-text'>Future Sure Academics - FSA
                  <br />FSA your career. Unlock future possibilities.
                </p>
                <a
                  className="btn btn-base b-animate-3 mr-sm-3 mr-2"
                  href="contact.html"
                >
                  Get A Quote
                </a>
                <a className="btn btn-border-white b-animate-3" href="blog.html">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-8 order-lg-12 align-self-center">
              <div className="thumb b-animate-thumb">
                <img src="/assets/img/banner/1.png" alt="img" />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="banner-area banner-area-dd bg-darkgray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8 order-lg-12 align-self-center">
              <div className="thumb b-animate-thumb">
                <img src="/assets/img/banner/1.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-7 order-lg-1 align-self-center">
              <div className="banner-inner text-center text-lg-left mt-5 mt-lg-0">
                {/* <h6 className="b-animate-1 sub-title">DISCOVER RESEARCH</h6> */}
                <h1 className=" white-text b-animate-2 title">
                  Human Asset Creation is a mission for us
                </h1>
                <p className='white-text'>And we believe you are one.<br />
                  Enhancing your career prospects is at the core of our endeavour.</p>
                <a
                  className="btn btn-base b-animate-3 mr-sm-3 mr-2"
                  href="contact.html"
                >
                  Get A Quote
                </a>
                <a className="btn btn-border-white b-animate-3" href="blog.html">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* intro area end */}
      {/* about area for Our Mentors/Teachers start */}
      <div className="about-area pd-top-140">
        <div className="container">
          <div className="about-area-inner">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="about-thumb-wrap left-icon"
                  style={{ backgroundImage: 'url("/assets/img/banner/2.png")' }}
                >
                  <div className="about-icon">
                    <img src="/assets/img/icon/4.png" alt="img" />
                  </div>
                  <div className="bottom-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmo
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-inner-wrap pl-xl-4 pt-5 pt-lg-0 mt-5 mt-lg-0">
                  <div className="section-title mb-0">
                    <h6 className="sub-title right-line">Our Mentors/Teachers</h6>
                    <h2 className="title" style={{ fontSize: "2.2rem" }}>Our Mentors/Teachers are called ‘Top Knowledge from Top Minds’ as
                      they truly deserve this tag.</h2>
                    {/* <p className="content">
                      Have fear. Become fearless. Become special with special needs program
                    </p> */}
                    <ul className="single-list-wrap">

                      <li className="single-list-inner style-check-box-grid">
                        <div className="media">
                          <div className="media-left" style={{ marginTop: "-15px" }}>
                            <i className="fa fa-check" />
                          </div>
                          <div className="media-body">
                            <h5>Can they Inspire</h5>
                          </div>
                        </div>
                      </li>


                      <li className="single-list-inner style-check-box-grid">
                        <div className="media">
                          <div className="media-left" style={{ marginTop: "-15px" }}>
                            <i className="fa fa-check" />
                          </div>
                          <div className="media-body">
                            <h5>Do they make teaching interesting</h5>
                          </div>
                        </div>
                      </li>

                      <li className="single-list-inner style-check-box-grid">
                        <div className="media">
                          <div className="media-left" style={{ marginTop: "-15px" }}>
                            <i className="fa fa-check" />
                          </div>
                          <div className="media-body">
                            <h5>Do they make topics simple to understand</h5>
                          </div>
                        </div>
                      </li>


                      <li className="single-list-inner style-check-box-grid">
                        <div className="media">
                          <div className="media-left" style={{ marginTop: "-15px" }}>
                            <i className="fa fa-check" />
                          </div>
                          <div className="media-body">
                            <h5>Do they focus on teaching or learning</h5>
                          </div>
                        </div>
                      </li>


                      <li className="single-list-inner style-check-box-grid">
                        <div className="media">
                          <div className="media-left" style={{ marginTop: "-15px" }}>
                            <i className="fa fa-check" />
                          </div>
                          <div className="media-body">
                            <h5>Do they have patience</h5>
                          </div>
                        </div>
                      </li>


                      <li className="single-list-inner style-check-box-grid">
                        <div className="media">
                          <div className="media-left">
                            <i className="fa fa-check" />
                          </div>
                          <div className="media-body">
                            <h5>Do they always speak positive about every child</h5>
                          </div>
                        </div>
                      </li>


                      <li className="single-list-inner style-check-box-grid">
                        <div className="media">
                          <div className="media-left" style={{ marginTop: "-15px" }}>
                            <i className="fa fa-check" />
                          </div>
                          <div className="media-body">
                            <h5>Do they put the students at ease</h5>
                          </div>
                        </div>
                      </li>


                      <li className="single-list-inner style-check-box-grid">
                        <div className="media">
                          <div className="media-left">
                            <i className="fa fa-check" />
                          </div>
                          <div className="media-body">
                            <h5>Do they have bias towards more intelligent students</h5>
                          </div>
                        </div>
                      </li>


                      <li className="single-list-inner style-check-box-grid">
                        <div className="media">
                          <div className="media-left">
                            <i className="fa fa-check" />
                          </div>
                          <div className="media-body">
                            <h5>Do they establish communication with every child</h5>
                          </div>
                        </div>
                      </li>


                      <li className="single-list-inner style-check-box-grid">
                        <div className="media">
                          <div className="media-left">
                            <i className="fa fa-check" />
                          </div>
                          <div className="media-body">
                            <h5>Are the wedded to only to their job or the life at stake</h5>
                          </div>
                        </div>
                      </li>


                      <li className="single-list-inner style-check-box-grid">
                        <div className="media">
                          <div className="media-left" style={{ marginTop: "-15px" }}>
                            <i className="fa fa-check" />
                          </div>
                          <div className="media-body">
                            <h5>In a nutshell, do they go all out</h5>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* about area for Our Mentors/Teachers end */}

      {/* coming soon start */}
      <div className="comingSoon-area pd-top-140">
        <div className="container">
          <div className="comingSoon-area-inner">
            <div className="section-title mb-0">
              <h6 className="sub-title right-line">Coming Soon</h6>
              <h2 className="title">- School of Entrepreneurship & Wealth Management</h2>
              <h2 className="title">- Purple Cap Institute of Leadership</h2>
            </div>
          </div>
        </div>
      </div>
      {/* coming soon end */}

      {/* course area start */}
      <div className="course-area pd-top-100 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-11">
              <div className="section-title style-white text-center">
                <h2 className="title">Our Career for Competitive Exam Programs</h2>
              </div>
            </div>
          </div>
          <div className="edmt-nav-tab style-white text-center">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="tab1-tab"
                  data-toggle="tab"
                  href="#tab1"
                  role="tab"
                  aria-controls="tab1"
                  aria-selected="true"
                >
                  Foundational  (Class 8th– 10th )
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="tab2-tab"
                  data-toggle="tab"
                  href="#tab2"
                  role="tab"
                  aria-controls="tab2"
                  aria-selected="false"
                >
                  Competition  (Class 11th– 12th )
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="tab3-tab"
                  data-toggle="tab"
                  href="#tab3"
                  role="tab"
                  aria-controls="tab3"
                  aria-selected="false"
                >
                  Career (UG – PG )
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="tab4-tab"
                  data-toggle="tab"
                  href="#tab4"
                  role="tab"
                  aria-controls="tab4"
                  aria-selected="false"
                >
                  Competitions after UG/PG
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tab1"
              role="tabpanel"
              aria-labelledby="tab1-tab"
            >
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>Board Prep</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>ME</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>STEM</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>ASAN Program</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab2"
              role="tabpanel"
              aria-labelledby="tab2-tab"
            >
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>Board Prep</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>IIT</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>NEET</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>IPMAT</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>CUET</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>Commerce Professional Exams</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab3"
              role="tabpanel"
              aria-labelledby="tab3-tab"
            >
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>For B.Com</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>BBA</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>BCA</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}> M.Com</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>BBA</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>MBA</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>MCA</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab4"
              role="tabpanel"
              aria-labelledby="tab4-tab"
            >
              <div className="row">

                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>MBA Entrance</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            CAT/XAT/CMAT | <br />Other exams
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>Govt. Jobs</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            – Banking | SSC | Railways | <br />Other exams
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>Commerce Programs</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            CA Inter & Final | CFA | FRM | Investment Banking
                            and many other programs
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* course area End */}


      {/* Second course area start */}
      <div className="course-area pd-top-100 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-11">
              <div className="section-title style-white text-center">
                <h2 className="title">Demo Our Career for Competitive Exam Programs xyz</h2>
              </div>
            </div>
          </div>


          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tab1"
              role="tabpanel"
              aria-labelledby="tab1-tab"
            >
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>Board Prep</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>ME</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>STEM</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>



            <div
              className="tab-pane fade"
              id="tab3"
              role="tabpanel"
              aria-labelledby="tab3-tab"
            >
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>For B.Com</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>BBA</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>BCA</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}> M.Com</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>BBA</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>MBA</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="single-course-inner">
                    <div className="thumb">
                      <img src="/assets/img/course/1.png" alt="img" />
                    </div>
                    <div className="details">
                      <div className="details-inner">
                        <div className="emt-user">
                          {/* <span className="u-thumb">
                         <img src="/assets/img/author/1.png" alt="img" />
                       </span> */}
                          <span className="align-self-center" style={{ fontSize: '20px' }}>MCA</span>
                        </div>
                        <h6>
                          <a href="course-details.html">
                            Lorem Ipsum is simply dummy text of the printing
                          </a>
                        </h6>
                      </div>
                      <div className="emt-course-meta">
                        <div className="row">
                          <div className="col-6">
                            <div className="rating">
                              <i className="fa fa-star" /> 4.3
                              {/* <span>(23)</span> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="price text-right">
                              Price: <span>$54.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Second course area End */}


      {/* counter area start */}
      <div className="counter-area bg-gray">
        <div className="container">
          <div
            className="counter-area-inner pd-top-120 pd-bottom-120"
            style={{ backgroundImage: 'url("/assets/img/other/1.png")' }}
          >
            <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="section-title mb-0">
                  <h6 className="sub-title right-line">Delivery of the Program</h6>
                  <h2 className="title">Ours is a Student First approach</h2>
                  <p className="content pb-3">
                    While others do the easier and the only thing of just
                    ‘TEACHING’, we take up the tougher job of making you to
                    ‘LEARN’.
                  </p>
                  <ul>
                    <li>High Consciousness Level – Consciousness that the future of the child depends on our effort</li>
                    <li>Responsible Mentorship - to ensure every child is guided towards right Career path</li>
                    <li>Care & Empathy – Customising a plan for those weak & strong without differentiating them on performance</li>
                    <li>Best Learning Practice – to remove superficial disaggregated form of knowledge</li>
                    <li>Uncompromising Ethics – to develop long term trust as student’s right learning partner</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <ul className="single-list-wrap">
                  <li className="single-list-inner style-box-bg">
                    <div className="media">
                      <div className="media-left">
                        <img src="/assets/img/icon/1.png" alt="img" />
                      </div>
                      <div className="media-body align-self-center">
                        <h5>
                          <span className="counter">1200</span>+
                        </h5>
                        <p>Learners &amp; counting</p>
                      </div>
                    </div>
                  </li>
                  <li className="single-list-inner style-box-bg">
                    <div className="media">
                      <div className="media-left">
                        <img src="/assets/img/icon/2.png" alt="img" />
                      </div>
                      <div className="media-body align-self-center">
                        <h5>
                          <span className="counter">320</span>+
                        </h5>
                        <p>Total courses</p>
                      </div>
                    </div>
                  </li>
                  <li className="single-list-inner style-box-bg">
                    <div className="media">
                      <div className="media-left">
                        <img src="/assets/img/icon/3.png" alt="img" />
                      </div>
                      <div className="media-body align-self-center">
                        <h5>
                          <span className="counter">1340</span>+
                        </h5>
                        <p>Successful students</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter area end */}
      {/* work area start */}

      {/* work area end */}
      {/* testimonial area start */}
      <div className="testimonial-area pd-top-100 mb-5">
        <div className="container">
          <h2 className="title">Our Student Feedback</h2>
          <p>Honest endeavour always shows up.</p>

          <div
            className="testimonial-area-inner bg-cover"
            style={{ backgroundImage: 'url("/assets/img/other/2.png")' }}
          >
            <img
              className="testimonial-right-img"
              src="/assets/img/other/3.png"
              alt="img"
            />
            <div className="testimonial-slider owl-carousel">
              <div className="item">
                <div className="single-testimonial-inner style-white">
                  <span className="testimonial-quote">
                    <i className="fa fa-quote-left" />
                  </span>
                  <p className="mb-4">
                    Eugene Freeman sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, elitr, sed diam sed diam volu
                  </p>
                  <div className="media testimonial-author">
                    <div className="media-left">
                      <img src="/assets/img/author/1.png" alt="img" />
                      <i className="fa fa-quote-left" />
                    </div>
                    <div className="media-body align-self-center">
                      <h6>Eugene Freeman</h6>
                      <p>Tincidunt</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="single-testimonial-inner style-white">
                  <span className="testimonial-quote">
                    <i className="fa fa-quote-left" />
                  </span>
                  <p className="mb-4">
                    Jaction Freeman amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed elitr, sed diam diam volu
                  </p>
                  <div className="media testimonial-author">
                    <div className="media-left">
                      <img src="/assets/img/author/2.png" alt="img" />
                      <i className="fa fa-quote-left" />
                    </div>
                    <div className="media-body align-self-center">
                      <h6>Jaction Freeman</h6>
                      <p>Tincidunt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VFSL community start */}
      <div className="vfslCommunity-area pd-top-140">
        <div className="container">
          <div className="vfslCommunity-area-inner">
            <div className="section-title mb-0">
              <h6 className="sub-title right-line">Voice for Future Sure Life</h6>
              <h2 className="title">Let’s change archaic practices. Let’s be that voice</h2>
              <div className="desc">
                <p>Through VFSL – We are creating one of the largest community for Intellectuals,
                  Thinkers, Social Reformers, Teachers and those meaningfully adding to growth of
                  humans and society and those who become the voice for making the future of
                  next gen sure and secure. </p>
              </div>

              <div className="join-community">
                <h4>If you believe you can be the Voice of change, join our VFSL comunity</h4>

                <a
                  className="btn btn-base b-animate-3 mr-sm-3 mr-2"
                  href="contact.html"
                  style={{marginBottom:"2rem"}}
                >
                  Join our VFSL community
                </a>

              </div>

            </div>
          </div>
        </div>
      </div>
      {/* VFSL community end */}

    </>


  )
}

export default Home2