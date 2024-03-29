import React from 'react'

const CouseDetails = () => {
    return (
        <>
            {/* <!-- breadcrumb start --> */}
            <div class="breadcrumb-area bg-overlay" style={{backgroundImage:"url('assets/img/bg/3.png')"}}>
                <div className="container">
                    <div className="breadcrumb-inner">
                        <div className="section-title mb-0 text-center">
                            <h2 className="page-title">Courses Details</h2>
                            <ul className="page-list">
                                <li><a href="index.html">Home</a></li>
                                <li>Courses Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrumb end --> */}

            {/* <!-- course-single area start --> */}
            <div className="course-single-area pd-top-120 pd-bottom-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="course-course-detaila-inner">
                                <div className="details-inner">
                                    <h3 class="title"><a href="course-details.html">Fox Nymphs Grab Quick-jived Waltz. Brick
                                        Quiz Whangs</a></h3>
                                </div>
                                <div className="thumb">
                                    <img src="assets/img/course/9.png" alt="img" />
                                </div>
                                <div className="course-details-nav-tab text-center">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a class="nav-link active" id="tab1-tab" data-toggle="tab" href="#tab1" role="tab"
                                                aria-controls="tab1" aria-selected="true">Description</a>
                                        </li>
                                        <li className="nav-item">
                                            <a class="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab"
                                                aria-controls="tab2" aria-selected="false">Curriculum</a>
                                        </li>
                                        <li className="nav-item">
                                            <a class="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3" role="tab"
                                                aria-controls="tab3" aria-selected="false">FAQ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a class="nav-link" id="tab4-tab" data-toggle="tab" href="#tab4" role="tab"
                                                aria-controls="tab4" aria-selected="false">Review</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
                                        <div className="course-details-content">
                                            <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.
                                                Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz,
                                                bad nymph, htmlFor quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz
                                                whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting
                                                zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew
                                                my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax
                                                my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my
                                                brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job,
                                                kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad
                                                quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick
                                                brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves
                                                quack! Blowzy red vixens fight htmlFor a quick jump.</p>
                                            <div className="row pt-4">
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
                                                <div className="col-sm-6 mt-3 mt-sm-0">
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
                                    </div>
                                    <div class="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
                                        <div className="course-details-content">
                                            <h4 className="title">Overview</h4>
                                            <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.
                                                Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz,
                                                bad nymph, htmlFor quick jigs vex! Fox nymphs grab</p>
                                            <div id="accordion" className="accordion-area mt-4">
                                                <div className="card single-faq-inner style-no-border">
                                                    <div class="card-header" id="ff-one">
                                                        <h5 className="mb-0">
                                                            <button className="btn-link" data-toggle="collapse" data-target="#f-one"
                                                                aria-expanded="true" aria-controls="f-one">
                                                                01. What does you simply dummy in do ?
                                                                <i className="fa fa-eye"></i>
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="f-one" className="show collapse" aria-labelledby="ff-one"
                                                        data-parent="#accordion">
                                                        <div className="card-body">
                                                            What does you dummy text of free available in market printing has
                                                            industry been industry's standard dummy text ever.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card single-faq-inner style-no-border">
                                                    <div class="card-header" id="ff-two">
                                                        <h5 className="mb-0">
                                                            <button className="btn-link collapsed" data-toggle="collapse"
                                                                data-target="#f-two" aria-expanded="true" aria-controls="f-two">
                                                                02. What graphics dummy of free design ?
                                                                <i className="fa fa-eye"></i>
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="f-two" className="collapse" aria-labelledby="ff-two"
                                                        data-parent="#accordion">
                                                        <div className="card-body">
                                                            What graphics simply dummy text of free available in market printing
                                                            industry has been industry's standard dummy text ever.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card single-faq-inner style-no-border">
                                                    <div class="card-header" id="ff-three">
                                                        <h5 className="mb-0">
                                                            <button className="btn-link collapsed" data-toggle="collapse"
                                                                data-target="#f-three" aria-expanded="true"
                                                                aria-controls="f-three">
                                                                03. Why we are the best ?
                                                                <i className="fa fa-eye"></i>
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="f-three" className="collapse" aria-labelledby="ff-three"
                                                        data-parent="#accordion">
                                                        <div className="card-body">
                                                            Why we are dummy text of free available in market printing industry
                                                            has been industry's standard dummy text ever.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card single-faq-inner style-no-border">
                                                    <div class="card-header" id="ff-four">
                                                        <h5 className="mb-0">
                                                            <button className="btn-link collapsed" data-toggle="collapse"
                                                                data-target="#f-four" aria-expanded="true"
                                                                aria-controls="f-four">
                                                                04. What industries dummy covered ?
                                                                <i className="fa fa-eye"></i>
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="f-four" className="collapse" aria-labelledby="ff-four"
                                                        data-parent="#accordion">
                                                        <div className="card-body">
                                                            What industries text of free available in market printing industry
                                                            has been industry's standard dummy text ever.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
                                        <div className="course-details-content">
                                            <h4 className="title">Overview</h4>
                                            <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.
                                                Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz,
                                                bad nymph, htmlFor quick jigs vex! Fox nymphs grab</p>
                                            <div id="accordion-1" className="accordion-area mt-4">
                                                <div className="card single-faq-inner style-header-bg">
                                                    <div class="card-header" id="ff-five">
                                                        <h5 className="mb-0">
                                                            <button className="btn-link" data-toggle="collapse"
                                                                data-target="#f-five" aria-expanded="true"
                                                                aria-controls="f-five">
                                                                01. What does you simply dummy in do ?
                                                                <i className="fa fa-eye"></i>
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="f-five" className="show collapse" aria-labelledby="ff-five"
                                                        data-parent="#accordion">
                                                        <div className="card-body">
                                                            What does you dummy text of free available in market printing has
                                                            industry been industry's standard dummy text ever.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card single-faq-inner style-header-bg">
                                                    <div class="card-header" id="ff-six">
                                                        <h5 className="mb-0">
                                                            <button className="btn-link collapsed" data-toggle="collapse"
                                                                data-target="#f-six" aria-expanded="true" aria-controls="f-six">
                                                                02. What graphics dummy of free design ?
                                                                <i className="fa fa-eye"></i>
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="f-six" className="collapse" aria-labelledby="ff-six"
                                                        data-parent="#accordion">
                                                        <div className="card-body">
                                                            What graphics simply dummy text of free available in market printing
                                                            industry has been industry's standard dummy text ever.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card single-faq-inner style-header-bg">
                                                    <div class="card-header" id="ff-seven">
                                                        <h5 className="mb-0">
                                                            <button className="btn-link collapsed" data-toggle="collapse"
                                                                data-target="#f-seven" aria-expanded="true"
                                                                aria-controls="f-seven">
                                                                03. Why we are the best ?
                                                                <i className="fa fa-eye"></i>
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="f-seven" className="collapse" aria-labelledby="ff-seven"
                                                        data-parent="#accordion">
                                                        <div className="card-body">
                                                            Why we are dummy text of free available in market printing industry
                                                            has been industry's standard dummy text ever.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card single-faq-inner style-header-bg">
                                                    <div class="card-header" id="ff-eight">
                                                        <h5 className="mb-0">
                                                            <button className="btn-link collapsed" data-toggle="collapse"
                                                                data-target="#f-eight" aria-expanded="true"
                                                                aria-controls="f-eight">
                                                                04. What industries dummy covered ?
                                                                <i className="fa fa-eye"></i>
                                                            </button>
                                                        </h5>
                                                    </div>
                                                    <div id="f-eight" className="collapse" aria-labelledby="ff-eight"
                                                        data-parent="#accordion">
                                                        <div className="card-body">
                                                            What industries text of free available in market printing industry
                                                            has been industry's standard dummy text ever.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
                                        <div className="ratings-list-inner mb-4">
                                            <div className="row">
                                                <div className="col-md-4 align-self-center text-center">
                                                    <div className="total-avarage-rating">
                                                        <h2>5.0</h2>
                                                        <div className="rating-inner">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                        <p>Rated 5 out of 3 Ratings</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <span className="counter-label"><i class="fa fa-star"></i>5</span>
                                                                <span className="progress-bar-inner">
                                                                    <span className="progress">
                                                                        <span className="progress-bar" role="progressbar"
                                                                            aria-valuenow="100" aria-valuemin="0"
                                                                            aria-valuemax="100" style={{width:"100%"}}></span>
                                                                    </span>
                                                                </span>
                                                                <span className="counter-count">100%</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="counter-label"><i class="fa fa-star"></i>4</span>
                                                                <span className="progress-bar-inner">
                                                                    <span className="progress">
                                                                        <span className="progress-bar" role="progressbar"
                                                                            aria-valuenow="80" aria-valuemin="0"
                                                                            aria-valuemax="100" style={{width:"0%"}}></span>
                                                                    </span>
                                                                </span>
                                                                <span className="counter-count">0%</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="counter-label"><i class="fa fa-star"></i>3</span>
                                                                <span className="progress-bar-inner">
                                                                    <span className="progress">
                                                                        <span className="progress-bar" role="progressbar"
                                                                            aria-valuenow="0" aria-valuemin="0"
                                                                            aria-valuemax="100" style={{width:"0%"}}></span>
                                                                    </span>
                                                                </span>
                                                                <span className="counter-count">0%</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="counter-label"><i class="fa fa-star"></i>2</span>
                                                                <span className="progress-bar-inner">
                                                                    <span className="progress">
                                                                        <span className="progress-bar" role="progressbar"
                                                                            aria-valuenow="0" aria-valuemin="0"
                                                                            aria-valuemax="100" style={{width:"0%"}}></span>
                                                                    </span>
                                                                </span>
                                                                <span className="counter-count">0%</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="counter-label"><i class="fa fa-star"></i>1</span>
                                                                <span className="progress-bar-inner">
                                                                    <span className="progress">
                                                                        <span className="progress-bar" role="progressbar"
                                                                            aria-valuenow="0" aria-valuemin="0"
                                                                            aria-valuemax="100" style={{width:"0%"}}></span>
                                                                    </span>
                                                                </span>
                                                                <span className="counter-count">0%</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="td-sidebar">
                                <div className="widget widget_feature">
                                    <h4 className="widget-title">Course Features</h4>
                                    <ul>
                                        <li><i className="fa fa-user"></i><span>Enrolled :</span> 1200 students</li>
                                        <li><i className="fa fa-clock-o"></i><span>Duration :</span> 2 hours</li>
                                        <li><i className="fa fa-clipboard"></i><span>Lectures :</span> 8</li>
                                        <li><i className="fa fa-clone"></i><span>Categories:</span> Technology</li>
                                        <li><i className="fa fa-tags"></i><span>Tags:</span> Android, JavaScript</li>
                                        <li><i className="fa fa-clipboard"></i><span>Instructor:</span> Ethan Dean</li>
                                    </ul>
                                    <div className="price-wrap text-center">
                                        <h5>Price:<span>$54.00</span></h5>
                                        <a class="btn btn-base btn-radius" href="#">ENROLL COURSE</a>
                                    </div>
                                </div>
                                {/* <div className="widget widget_catagory">
                                    <h4 className="widget-title">Trending Course</h4>
                                    <div className="single-course-inner">
                                        <div className="thumb">
                                            <img src="assets/img/course/1.png" alt="img" />
                                        </div>
                                        <div className="details">
                                            <div className="details-inner">
                                                <div className="emt-user">
                                                    <span class="u-thumb"><img src="assets/img/author/1.png" alt="img" /></span>
                                                    <span className="align-self-center">Nancy Reyes</span>
                                                </div>
                                                <h6><a href="course-details.html">Fox nymphs grab quick-jived waltz. Brick quiz
                                                    whangs</a></h6>
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
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- course-single area end --> */}
        </>
    )
}

export default CouseDetails;
