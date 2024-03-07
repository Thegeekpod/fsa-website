import React from 'react'

const CareerReserchDetails = () => {
  return (
    <>
        {/* <!-- breadcrumb start --> */}
    <div class="breadcrumb-area bg-overlay" style={{backgroundImage:"url('assets/img/bg/3.png')"}}>
        <div className="container">
            <div className="breadcrumb-inner">
                <div className="section-title mb-0 text-center">
                    <h2 className="page-title">Career Research Details</h2>
                    <ul className="page-list">
                        <li><a href="index.html">Home</a></li>
                        <li>Career Research Details</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- breadcrumb end --> */}

    {/* <!-- blog area start --> */}
    <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
            <div className="">
                <div className="det-container">
                    <div className="blog-details-page-content">
                        <div className="single-blog-inner">
                            <div className="thumb">
                                <img src="assets/img/blog/4.png" alt="img" style={{width:"1094px"}}/>
                            </div>
                            <div className="details">
                                <ul className="blog-meta">
                                    <li><i className="fa fa-user"></i> BY ADMIN</li>
                                    <li><i className="fa fa-calendar-check-o"></i> 28 JANUARY, 2020</li>
                                </ul>
                                <h3 className="title">Flock by when MTV ax quiz prog quiz graced</h3>
                                <p>Lorem ipsum dolor sit amet, elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                    et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                    kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                    dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                                    ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                <blockquote>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
                                    <h6 className="mb-0 mt-2">Marilyn Gilbert</h6>
                                </blockquote>
                                <p>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                    est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                    erat, sed diam voluptua. At vero eos et accusam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- blog area end --> */}
    </>
  )
}

export default CareerReserchDetails;
