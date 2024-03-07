import React, { useState } from 'react';

const CareerSuccessStories = () => {
    const [expanded, setExpanded] = useState([false, false, false, false, false, false]);

    const handleToggle = (index) => {
        setExpanded((prevExpanded) => {
            const newExpanded = [...prevExpanded];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    };

    return (
        <>
            {/* <!-- breadcrumb start --> */}
            <div className="breadcrumb-area bg-overlay" style={{ backgroundImage: "url('assets/img/bg/3.png')" }}>
                <div className="container">
                    <div className="breadcrumb-inner">
                        <div className="section-title mb-0 text-center">
                            <h2 className="page-title">Career Success Stories</h2>
                            <ul className="page-list">
                                <li><a href="index.html">Home</a></li>
                                <li>Career Success Stories</li>
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
                                            Flock by when MTV ax quiz prog quiz graced
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                        </p>
                                        <p style={{ display: expanded[index] ? 'inline' : 'none' }}>
                                            {/* Your more text goes here */}
                                            Additional text for blog {index}
                                        </p>
                                        <button
                                            className="read-more-text"
                                            style={{ border: "none", background: "transparent" }}
                                            onClick={() => handleToggle(index)}
                                        >
                                            {expanded[index] ? 'READ LESS' : 'READ MORE'} <i className="fa fa-angle-right"></i>
                                        </button>
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

export default CareerSuccessStories;
