import React from 'react'

const About = () => {
  return (
    <>
      {/* <!-- breadcrumb start --> */}
      <div class="breadcrumb-area bg-overlay" style={{backgroundImage:"url('assets/img/bg/3.png')"}}>
        <div className="container">
          <div className="breadcrumb-inner">
            <div className="section-title mb-0 text-center">
              <h2 className="page-title">About Us</h2>
              <ul className="page-list">
                <li><a href="index.html">Home</a></li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumb end --> */}

      {/* <!-- about area start --> */}
      <div className="about-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="about-area-inner">
            <div className="row">
              <div className="col-lg-6 col-md-10">
                <div className="about-thumb-wrap after-shape"
                  style={{backgroundImage: "url('assets/img/about/2.png')"}}>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-inner-wrap">
                  <div className="section-title mb-0">
                    <h6 className="sub-title right-line">ABOUT US</h6>
                    <h2 className="title">Education in continuing a proud tradition.</h2>
                    <p className="content">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
                      quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.
                      Waltz, bad nymph,</p>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul className="single-list-wrap">
                          <li className="single-list-inner style-check-box">
                            <i className="fa fa-check"></i> Metus interdum metus
                          </li>
                          <li className="single-list-inner style-check-box">
                            <i className="fa fa-check"></i> Ligula cur maecenas
                          </li>
                          <li className="single-list-inner style-check-box">
                            <i className="fa fa-check"></i> Fringilla nulla
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="single-list-wrap">
                          <li className="single-list-inner style-check-box">
                            <i className="fa fa-check"></i> Metus interdum metus
                          </li>
                          <li className="single-list-inner style-check-box">
                            <i className="fa fa-check"></i> Ligula cur maecenas
                          </li>
                          <li className="single-list-inner style-check-box">
                            <i className="fa fa-check"></i> Fringilla nulla
                          </li>
                        </ul>
                      </div>
                    </div>
                    <a class="btn btn-border-black" href="about.html">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- about area end --> */}

      {/* <!-- counter area start --> */}
      <div className="counter-area bg-gray">
        <div className="container">
          <div className="counter-area-inner pd-top-110 pd-bottom-120"
            style={{backgroundImage: "url('assets/img/other/1.png')"}}>
            <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="section-title mb-0">
                  <h6 className="sub-title right-line">Funfact</h6>
                  <h2 className="title">Strength in Numbers</h2>
                  <p className="content pb-3">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
                    quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.
                    Waltz, bad nymph, htmlFor quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz
                    whangs jumpy</p>
                  <div className="btn-counter bg-base mt-4">
                    <h3 className="left-val align-self-center"><span class="counter">2.4</span>k+</h3>
                    <div className="right-val align-self-center">
                      Successful <br /> students
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 align-self-center">
                <ul className="single-list-wrap">
                  <li className="single-list-inner style-box-bg">
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/icon/1.png" alt="img" />
                      </div>
                      <div className="media-body align-self-center">
                        <h5><span className="counter">1200</span>+</h5>
                        <p>Learners & counting</p>
                      </div>
                    </div>
                  </li>
                  <li className="single-list-inner style-box-bg">
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/icon/2.png" alt="img" />
                      </div>
                      <div className="media-body align-self-center">
                        <h5><span className="counter">320</span>+</h5>
                        <p>Total courses</p>
                      </div>
                    </div>
                  </li>
                  <li className="single-list-inner style-box-bg">
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/icon/3.png" alt="img" />
                      </div>
                      <div className="media-body align-self-center">
                        <h5><span className="counter">1340</span>+</h5>
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
      {/* <!-- counter area end --> */}

      {/* <!-- team area start --> */}
      <div className="team-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <div className="section-title text-center">
                <h6 className="sub-title double-line">Meet Our Team</h6>
                <h2 className="title">Our Creative Team</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner">
                <div className="thumb">
                  <img src="assets/img/team/1.png" alt="img" />
                  <div className="social-wrap">
                    <div className="social-wrap-inner">
                      <a className="social-share" href="#"><i class="fa fa-share-alt"></i></a>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <h4><a href="#">Doris Jordan</a></h4>
                  <span>Design Expert</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner">
                <div className="thumb">
                  <img src="assets/img/team/2.png" alt="img" />
                  <div className="social-wrap">
                    <div className="social-wrap-inner">
                      <a className="social-share" href="#"><i class="fa fa-share-alt"></i></a>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <h4><a href="#">Eugen Freman</a></h4>
                  <span>Executive</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-team-inner">
                <div className="thumb">
                  <img src="assets/img/team/3.png" alt="img" />
                  <div className="social-wrap">
                    <div className="social-wrap-inner">
                      <a className="social-share" href="#"><i class="fa fa-share-alt"></i></a>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <h4><a href="#">Jaction Leo</a></h4>
                  <span>Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- team area end --> */}

      {/* <!-- speciality area start --> */}
      <div className="spaciality-area mg-top--170">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="testimonial-area-inner bg-cover h-100"
                style={{backgroundImage: "url('assets/img/other/2.png')"}}>
                <img class="testimonial-right-img" src="assets/img/other/4.png" alt="img" />
                <div className="single-testimonial-inner style-white">
                  <h4 className="text-white">A Journey to Excellence.</h4>
                  <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo
                    luctus gravida a in ipsum.</p>
                  <ul className="single-list-wrap">
                    <li className="single-list-inner style-check-box">
                      <i className="fa fa-check"></i> Metus interdum metus
                    </li>
                    <li className="single-list-inner style-check-box">
                      <i className="fa fa-check"></i> Ligula cur maecenas
                    </li>
                    <li className="single-list-inner style-check-box">
                      <i className="fa fa-check"></i> Fringilla nulla
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div class="subscribe-inner-area h-100" style={{backgroundColor: "var(--main-color)"}}>
                <h3>Committed to educating and nurturing all students</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a
                  in ipsum.</p>
                <div className="single-input-inner">
                  <input type="text" placeHolder="Email Address" />
                  <button className="btn btn-black"><i class="fa fa-envelope"></i> Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- speciality area end --> */}

      {/* <!--pricing-area start--> */}
      <div className="pricing-area pd-top-280 pd-bottom-120 text-center"
        style={{backgroundImage: "url(assets/img/bg/pricing-bg.png)"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-11">
              <div className="section-title text-center">
                <h6 className="sub-title double-line">Client Testimonials</h6>
                <h2 className="title">What our clients say </h2>
              </div>
            </div>
          </div>
          <div className="testimonial-slider-2 owl-carousel">
            <div className="item">
              <div className="single-testimonial-inner">
                <span className="testimonial-quote"><i class="fa fa-quote-right"></i></span>
                <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit. Duis at est id leo luctus gravida a
                  in ipsum.</p>
                <div className="media testimonial-author">
                  <div className="media-left">
                    <img src="assets/img/testimonial/1.png" alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h6>Eugene Freeman</h6>
                    <p>Tincidunt</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-testimonial-inner">
                <span className="testimonial-quote"><i class="fa fa-quote-right"></i></span>
                <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit. Duis at est id leo luctus gravida a
                  in ipsum.</p>
                <div className="media testimonial-author">
                  <div className="media-left">
                    <img src="assets/img/testimonial/2.png" alt="img" />
                  </div>
                  <div className="media-body align-self-center">
                    <h6>Kelly Coleman</h6>
                    <p>Nulla nec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--pricing-area end--> */}

      {/* <!--events-area start--> */}
      <div className="events-area pd-top-110 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-11">
              <div className="section-title text-center">
                <h6 className="sub-title double-line">EVENTS</h6>
                <h2 className="title">Upcoming Events</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul class="single-blog-list-wrap style-white" style={{backgroundColor: "var(--heading-color)"}}>
                <li>
                  <div className="media single-blog-list-inner style-white">
                    <div className="media-left date">
                      <span>JAN</span>
                      20
                    </div>
                    <div className="media-body details">
                      <ul className="blog-meta">
                        <li><i className="fa fa-user"></i> BY ADMIN</li>
                        <li><i className="fa fa-folder-open-o"></i> Air transport</li>
                      </ul>
                      <h5><a href="blog-details.html">Clone sit amet, consec tetur elit</a></h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media single-blog-list-inner">
                    <div className="media-left date">
                      <span>FEB</span>
                      26
                    </div>
                    <div className="media-body details">
                      <ul className="blog-meta">
                        <li><i className="fa fa-user"></i> BY ADMIN</li>
                        <li><i className="fa fa-folder-open-o"></i> Air transport</li>
                      </ul>
                      <h5><a href="blog-details.html">Maecenas interdum lorem eleifend</a></h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media single-blog-list-inner">
                    <div className="media-left date">
                      <span>JAN</span>
                      28
                    </div>
                    <div className="media-body details">
                      <ul className="blog-meta">
                        <li><i className="fa fa-user"></i> BY ADMIN</li>
                        <li><i className="fa fa-folder-open-o"></i> Air transport</li>
                      </ul>
                      <h5><a href="blog-details.html">Nunc scelerisque tincidunt elit. </a></h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="event-thumb">
                <img src="assets/img/other/events.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--events-area end--> */}
    </>
  )
}

export default About