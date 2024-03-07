import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const PhdCourse = () => {
  return (
    <>
            {/* <!-- breadcrumb start --> */}
            <div class="breadcrumb-area bg-overlay" style={{ backgroundImage: "url('assets/img/bg/3.png')" }}>
                <div className="container">
                    <div className="breadcrumb-inner">
                        <div className="section-title mb-0 text-center">
                            <h2 className="page-title">Ph.D. Courses</h2>
                            <ul className="page-list">
                                <li><a href="index.html">Home</a></li>
                                <li>Ph.D. Courses</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrumb end --> */}

           {/* <!-- blog area start --> */}
           <div className="row justify-content-center pd-top-100" style={{ margin: "17px" }}>
                <div className="col-lg-4 col-md-6">
                    <div className="single-course-inner">
                        <div className="thumb">
                            <img src="assets/img/course/1.png" alt="img" style={{ width: "100%" }} />
                        </div>
                        <div className="details">
                            <div className="details-inner">
                                <div className="emt-user">
                                    <span class="u-thumb"><img src="assets/img/author/1.png" alt="img" /></span>
                                    <span className="align-self-center">Nancy Reyes</span>
                                </div>
                                <h6><Link to="/course-details">Fox nymphs grab quick-jived waltz. Brick quiz
                                    whangs</Link></h6>
                            </div>
                            <div className="emt-course-meta">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="rating">
                                            <i className="fa fa-star"></i> 4.3
                                            <span>(23)</span>
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
                            <img src="assets/img/course/1.png" alt="img" style={{ width: "100%" }} />
                        </div>
                        <div className="details">
                            <div className="details-inner">
                                <div className="emt-user">
                                    <span class="u-thumb"><img src="assets/img/author/2.png" alt="img" /></span>
                                    <span className="align-self-center">Joe Powell</span>
                                </div>
                                <h6><Link to="/course-details">Aenean sed nibh a magna posuere tempo faucib</Link></h6>
                            </div>
                            <div className="emt-course-meta">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="rating">
                                            <i className="fa fa-star"></i> 4.3
                                            <span>(23)</span>
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
                            <img src="assets/img/course/1.png" alt="img" style={{ width: "100%" }} />
                        </div>
                        <div className="details">
                            <div className="details-inner">
                                <div className="emt-user">
                                    <span class="u-thumb"><img src="assets/img/author/3.png" alt="img" /></span>
                                    <span className="align-self-center">Timothy Willis</span>
                                </div>
                                <h6><Link to="/course-details">Praesent eu dolor eu orci vehicula euismod</Link></h6>
                            </div>
                            <div className="emt-course-meta">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="rating">
                                            <i className="fa fa-star"></i> 4.9
                                            <span>(73)</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="price text-right">
                                            Price: <span>$74.00</span>
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
                            <img src="assets/img/course/1.png" alt="img" style={{ width: "100%" }} />
                        </div>
                        <div className="details">
                            <div className="details-inner">
                                <div className="emt-user">
                                    <span class="u-thumb"><img src="assets/img/author/3.png" alt="img" /></span>
                                    <span className="align-self-center">Timothy Willis</span>
                                </div>
                                <h6><Link to="/course-details">Praesent eu dolor eu orci vehicula euismod</Link></h6>
                            </div>
                            <div className="emt-course-meta">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="rating">
                                            <i className="fa fa-star"></i> 4.9
                                            <span>(73)</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="price text-right">
                                            Price: <span>$74.00</span>
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
                            <img src="assets/img/course/1.png" alt="img" style={{ width: "100%" }} />
                        </div>
                        <div className="details">
                            <div className="details-inner">
                                <div className="emt-user">
                                    <span class="u-thumb"><img src="assets/img/author/3.png" alt="img" /></span>
                                    <span className="align-self-center">Timothy Willis</span>
                                </div>
                                <h6><Link to="/course-details">Praesent eu dolor eu orci vehicula euismod</Link></h6>
                            </div>
                            <div className="emt-course-meta">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="rating">
                                            <i className="fa fa-star"></i> 4.9
                                            <span>(73)</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="price text-right">
                                            Price: <span>$74.00</span>
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
                            <img src="assets/img/course/1.png" alt="img" style={{ width: "100%" }} />
                        </div>
                        <div className="details">
                            <div className="details-inner">
                                <div className="emt-user">
                                    <span class="u-thumb"><img src="assets/img/author/3.png" alt="img" /></span>
                                    <span className="align-self-center">Timothy Willis</span>
                                </div>
                                <h6><Link to="/course-details">Praesent eu dolor eu orci vehicula euismod</Link></h6>
                            </div>
                            <div className="emt-course-meta">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="rating">
                                            <i className="fa fa-star"></i> 4.9
                                            <span>(73)</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="price text-right">
                                            Price: <span>$74.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="td-page-navigation">
                    <ul className="pagination">
                        <li className="pagination-arrow"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
                        <li><a href="#">1</a></li>
                        <li><a class="active" href="#">2</a></li>
                        <li><a href="#">...</a></li>
                        <li><a href="#">3</a></li>
                        <li className="pagination-arrow"><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
                    </ul>
                </nav>
            </div>
            {/* <!-- blog area end --> */}
        </>
  )
}

export default PhdCourse
