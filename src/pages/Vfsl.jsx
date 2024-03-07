import React from 'react'

const Vfsl = () => {
    return (
        <>
            {/* <!-- breadcrumb start --> */}
            <div class="breadcrumb-area bg-overlay" style={{ backgroundImage: "url('assets/img/bg/3.png')" }}>
                <div className="container">
                    <div className="breadcrumb-inner">
                        <div className="section-title mb-0 text-center">
                            <h2 className="page-title">Instructor Details</h2>
                            <ul className="page-list">
                                <li><a href="index.html">Home</a></li>
                                <li>Instructor Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrumb end --> */}

            {/* <!-- team details page --> */}
            <div className="main-blog-area pd-top-120 pd-bottom-120">
                <div className="container">
                    <div className="team-details-page">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="thumb">
                                    <img src="assets/img/team/6.png" alt="img" />
                                </div>
                            </div>
                            <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
                                <div className="details">
                                    <h3>Christine Pearson</h3>
                                    <span className="designation">Design Expert</span>
                                    <span>Waltz, bad nymph, htmlFor quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz
                                        whangs jumpy veldt</span>
                                    <p className="mt-3">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz
                                        prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz,
                                        bad nymph, htmlFor quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs
                                        jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold
                                        Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew </p>
                                    <ul className="social-media style-base pt-4">
                                        <li>
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                 {/* form start  */}
                 <div className="widget widget-contact" style={{padding:"4rem", marginLeft:"1rem"}}>
                        <h4 className="widget-title">Get a Quote</h4>
                        <div className="single-input-inner style-right-icon">
                            <input type="text" placeHolder="Full name" />
                            <img src="assets/img/icon/25.png" alt="img" />
                        </div>
                        <div className="single-input-inner style-right-icon">
                            <input type="text" placeHolder="Email Address" />
                            <img src="assets/img/icon/26.png" alt="img" />
                        </div>
                        <div className="single-input-inner style-right-icon">
                            <textarea placeHolder="Your Message"></textarea>
                            <img src="assets/img/icon/27.png" alt="img" />
                        </div>
                        <a class="btn btn-base" href="#">Send Message</a>
                    </div>
                    {/* form end */}
            </div>
            {/* <!-- team details page end --> */}
        </>
    )
}

export default Vfsl;
