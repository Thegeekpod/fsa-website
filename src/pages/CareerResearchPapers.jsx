import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const CareerResearchPapers = () => {

    return (
        <>
            {/* <!-- breadcrumb start --> */}
            <div className="breadcrumb-area bg-overlay" style={{ backgroundImage: "url('assets/img/bg/3.png')" }}>
                <div className="container">
                    <div className="breadcrumb-inner">
                        <div className="section-title mb-0 text-center">
                            <h2 className="page-title">Career Research Papers & Articles</h2>
                            <ul className="page-list">
                                <li><a href="index.html">Home</a></li>
                                <li>Career Research Papers & Articles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrumb end --> */}

            {/* <!-- blog area start --> */}
            <div className="blog-area pd-top-120 pd-bottom-120">
                <div className="container">
                    <div className="row">
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="single-blog-inner style-border">
                                    <div className="thumb">
                                    <img src={`/assets/img/blog/2.png`} alt={`img${index}`} />
                                    </div>
                                    <div className="details">
                                        <h5 className="title">
                                            <Link to="/career-reserch-details">Flock by when MTV ax quiz prog quiz graced</Link>
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                        </p>
                                        <Link className="read-more-text" to="/career-reserch-details" > READ MORE<i className="fa fa-angle-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 text-center">
                        <nav className="td-page-navigation">
                            <ul className="pagination">
                                <li className="pagination-arrow"><a href="#"><i className="fa fa-angle-double-left"></i></a></li>
                                <li><a href="#">1</a></li>
                                <li><a className="active" href="#">2</a></li>
                                <li><a href="#">...</a></li>
                                <li><a href="#">3</a></li>
                                <li className="pagination-arrow"><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- blog area end --> */}
        </>
    );
}

export default CareerResearchPapers;
