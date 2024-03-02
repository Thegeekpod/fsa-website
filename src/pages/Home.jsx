import React from 'react'

const Home = () => {
  return (
   <> 
   {/* preloader area start */}
   <div className="preloader" id="preloader">
     <div className="preloader-inner">
       <div className="spinner">
         <div className="dot1" />
         <div className="dot2" />
       </div>
     </div>
   </div>
   {/* preloader area end */}
  
  
 
   {/* navbar end */}
   {/* banner start */}
   <div className="banner-area banner-area-1 bg-gray">
     <div className="container">
       <div className="row justify-content-center">
         <div className="col-lg-5 col-md-8 order-lg-12 align-self-center">
           <div className="thumb b-animate-thumb">
             <img src="/src/assets/img/banner/1.png" alt="img" />
           </div>
         </div>
         <div className="col-lg-7 order-lg-1 align-self-center">
           <div className="banner-inner text-center text-lg-left mt-5 mt-lg-0">
             <h6 className="b-animate-1 sub-title">DISCOVER RESEARCH</h6>
             <h1 className="b-animate-2 title">
               A better learning future starts here
             </h1>
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
   {/* banner end */}
   {/* intro area start */}
   <div className="intro-area intro-area--top">
     <div className="container">
       <div className="intro-area-inner bg-black">
         <div className="row no-gutters">
           <div className="col-lg-4 text-lg-left text-center">
             <div className="intro-title">
               <h3>Vivamus maximus </h3>
               <p>Lorem ipsum dolor sadipscing elitr, sed diam nonum</p>
               <ul>
                 <li>
                   <i className="fa fa-check" /> Nullam est{" "}
                 </li>
                 <li>
                   <i className="fa fa-check" /> Mattis dictum nunc
                 </li>
               </ul>
             </div>
           </div>
           <div className="col-lg-8 align-self-center">
             <ul className="row no-gutters">
               <li className="col-md-4">
                 <div className="single-intro-inner style-white text-center">
                   <div className="thumb">
                     <img src="/src/assets/img/intro/1.png" alt="img" />
                   </div>
                   <div className="details">
                     <h5>Postgraduate</h5>
                     <p>Lorem ipsum dolor</p>
                   </div>
                 </div>
               </li>
               <li className="col-md-4">
                 <div className="single-intro-inner style-white text-center">
                   <div className="thumb">
                     <img src="/src/assets/img/intro/2.png" alt="img" />
                   </div>
                   <div className="details">
                     <h5>Engineering</h5>
                     <p>Lorem ipsum dolor</p>
                   </div>
                 </div>
               </li>
               <li className="col-md-4">
                 <div className="single-intro-inner style-white text-center">
                   <div className="thumb">
                     <img src="/src/assets/img/intro/3.png" alt="img" />
                   </div>
                   <div className="details">
                     <h5>Accounting</h5>
                     <p>Lorem ipsum dolor</p>
                   </div>
                 </div>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </div>
   </div>
   {/* intro area end */}
   {/* about area start */}
   <div className="about-area pd-top-140">
     <div className="container">
       <div className="about-area-inner">
         <div className="row">
           <div className="col-lg-6">
             <div
               className="about-thumb-wrap left-icon"
               style={{ backgroundImage: 'url("/src/assets/img/banner/2.png")' }}
             >
               <div className="about-icon">
                 <img src="/src/assets/img/icon/4.png" alt="img" />
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
                 <h6 className="sub-title right-line">ABOUT US</h6>
                 <h2 className="title">Strength in Numbers</h2>
                 <p className="content">
                   The quick, brown fox jumps over a lazy dog. DJs flock by when
                   MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds
                   jog, flick quartz, vex nymphs. Waltz, bad nymph,
                 </p>
                 <ul className="single-list-wrap">
                   <li className="single-list-inner style-check-box-grid">
                     <div className="media">
                       <div className="media-left">
                         <i className="fa fa-check" />
                       </div>
                       <div className="media-body">
                         <h5>Ligula molestie</h5>
                         <p>
                           Lorem ipsum dolor sit amet, consectetur elit, sed do
                           eiusmod tempor incididunt ut labore
                         </p>
                       </div>
                     </div>
                   </li>
                   <li className="single-list-inner style-check-box-grid">
                     <div className="media">
                       <div className="media-left">
                         <i className="fa fa-check" />
                       </div>
                       <div className="media-body">
                         <h5>Ligula molestie</h5>
                         <p>
                           Lorem ipsum dolor sit amet, consectetur elit, sed do
                           eiusmod tempor incididunt ut labore
                         </p>
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
   {/* about area end */}
   {/* course area start */}
   <div className="course-area pd-top-100 pd-bottom-90">
     <div className="container">
       <div className="row justify-content-center">
         <div className="col-xl-8 col-lg-10 col-md-11">
           <div className="section-title style-white text-center">
             <h2 className="title">Top Featured Courses</h2>
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
               Graphics &amp; Design
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
               Digital Marketing
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
               Writing &amp; Translation
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
               Music &amp; Audio
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
                   <img src="/src/assets/img/course/1.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/1.png" alt="img" />
                       </span>
                       <span className="align-self-center">Nancy Reyes</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Fox nymphs grab quick-jived waltz. Brick quiz whangs
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.3
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
                   <img src="/src/assets/img/course/2.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/2.png" alt="img" />
                       </span>
                       <span className="align-self-center">Joe Powell</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Aenean sed nibh a magna posuere tempo faucib
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.3
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
                   <img src="/src/assets/img/course/3.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/3.png" alt="img" />
                       </span>
                       <span className="align-self-center">Timothy Willis</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Praesent eu dolor eu orci vehicula euismod
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.9
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
                   <img src="/src/assets/img/course/4.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/4.png" alt="img" />
                       </span>
                       <span className="align-self-center">Walter Griffin</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Duis vestibulum elit vel neque pharetra vulputate
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.8
                           <span>(53)</span>
                         </div>
                       </div>
                       <div className="col-6">
                         <div className="price text-right">
                           Price: <span>$64.00</span>
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
                   <img src="/src/assets/img/course/5.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/5.png" alt="img" />
                       </span>
                       <span className="align-self-center">Aaron Powell</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Quisque suscipit ipsum est, eu venenatis leo ornare eget
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.5
                           <span>(21)</span>
                         </div>
                       </div>
                       <div className="col-6">
                         <div className="price text-right">
                           Price: <span>$34.00</span>
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
                   <img src="/src/assets/img/course/6.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/6.png" alt="img" />
                       </span>
                       <span className="align-self-center">Randy Hart</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Duis rhoncus dui venenatis consequat porttito
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.4
                           <span>(20)</span>
                         </div>
                       </div>
                       <div className="col-6">
                         <div className="price text-right">
                           Price: <span>$55.00</span>
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
                   <img src="/src/assets/img/course/3.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/3.png" alt="img" />
                       </span>
                       <span className="align-self-center">Timothy Willis</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Praesent eu dolor eu orci vehicula euismod
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.9
                           <span>(73)</span>
                         </div>
                       </div>
                       <div className="col-6">
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
                   <img src="/src/assets/img/course/4.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/4.png" alt="img" />
                       </span>
                       <span className="align-self-center">Walter Griffin</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Duis vestibulum elit vel neque pharetra vulputate
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.8
                           <span>(53)</span>
                         </div>
                       </div>
                       <div className="col-6">
                         <div className="price text-right">
                           Price: <span>$64.00</span>
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
                   <img src="/src/assets/img/course/5.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/5.png" alt="img" />
                       </span>
                       <span className="align-self-center">Aaron Powell</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Quisque suscipit ipsum est, eu venenatis leo ornare eget
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.5
                           <span>(21)</span>
                         </div>
                       </div>
                       <div className="col-6">
                         <div className="price text-right">
                           Price: <span>$34.00</span>
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
                   <img src="/src/assets/img/course/6.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/6.png" alt="img" />
                       </span>
                       <span className="align-self-center">Randy Hart</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Duis rhoncus dui venenatis consequat porttito
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.4
                           <span>(20)</span>
                         </div>
                       </div>
                       <div className="col-6">
                         <div className="price text-right">
                           Price: <span>$55.00</span>
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
                   <img src="/src/assets/img/course/1.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/1.png" alt="img" />
                       </span>
                       <span className="align-self-center">Nancy Reyes</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Fox nymphs grab quick-jived waltz. Brick quiz whangs
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.3
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
                   <img src="/src/assets/img/course/2.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/2.png" alt="img" />
                       </span>
                       <span className="align-self-center">Joe Powell</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Aenean sed nibh a magna posuere tempo faucib
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.3
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
                   <img src="/src/assets/img/course/4.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/4.png" alt="img" />
                       </span>
                       <span className="align-self-center">Walter Griffin</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Duis vestibulum elit vel neque pharetra vulputate
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.8
                           <span>(53)</span>
                         </div>
                       </div>
                       <div className="col-6">
                         <div className="price text-right">
                           Price: <span>$64.00</span>
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
                   <img src="/src/assets/img/course/1.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/1.png" alt="img" />
                       </span>
                       <span className="align-self-center">Nancy Reyes</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Fox nymphs grab quick-jived waltz. Brick quiz whangs
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.3
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
                   <img src="/src/assets/img/course/5.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/5.png" alt="img" />
                       </span>
                       <span className="align-self-center">Aaron Powell</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Quisque suscipit ipsum est, eu venenatis leo ornare eget
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.5
                           <span>(21)</span>
                         </div>
                       </div>
                       <div className="col-6">
                         <div className="price text-right">
                           Price: <span>$34.00</span>
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
                   <img src="/src/assets/img/course/2.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/2.png" alt="img" />
                       </span>
                       <span className="align-self-center">Joe Powell</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Aenean sed nibh a magna posuere tempo faucib
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.3
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
                   <img src="/src/assets/img/course/3.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/3.png" alt="img" />
                       </span>
                       <span className="align-self-center">Timothy Willis</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Praesent eu dolor eu orci vehicula euismod
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.9
                           <span>(73)</span>
                         </div>
                       </div>
                       <div className="col-6">
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
                   <img src="/src/assets/img/course/6.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/6.png" alt="img" />
                       </span>
                       <span className="align-self-center">Randy Hart</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Duis rhoncus dui venenatis consequat porttito
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.4
                           <span>(20)</span>
                         </div>
                       </div>
                       <div className="col-6">
                         <div className="price text-right">
                           Price: <span>$55.00</span>
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
                   <img src="/src/assets/img/course/3.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/3.png" alt="img" />
                       </span>
                       <span className="align-self-center">Timothy Willis</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Praesent eu dolor eu orci vehicula euismod
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.9
                           <span>(73)</span>
                         </div>
                       </div>
                       <div className="col-6">
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
                   <img src="/src/assets/img/course/6.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/6.png" alt="img" />
                       </span>
                       <span className="align-self-center">Randy Hart</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Duis rhoncus dui venenatis consequat porttito
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.4
                           <span>(20)</span>
                         </div>
                       </div>
                       <div className="col-6">
                         <div className="price text-right">
                           Price: <span>$55.00</span>
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
                   <img src="/src/assets/img/course/4.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/4.png" alt="img" />
                       </span>
                       <span className="align-self-center">Walter Griffin</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Duis vestibulum elit vel neque pharetra vulputate
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.8
                           <span>(53)</span>
                         </div>
                       </div>
                       <div className="col-6">
                         <div className="price text-right">
                           Price: <span>$64.00</span>
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
                   <img src="/src/assets/img/course/1.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/1.png" alt="img" />
                       </span>
                       <span className="align-self-center">Nancy Reyes</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Fox nymphs grab quick-jived waltz. Brick quiz whangs
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.3
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
                   <img src="/src/assets/img/course/5.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/5.png" alt="img" />
                       </span>
                       <span className="align-self-center">Aaron Powell</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Quisque suscipit ipsum est, eu venenatis leo ornare eget
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.5
                           <span>(21)</span>
                         </div>
                       </div>
                       <div className="col-6">
                         <div className="price text-right">
                           Price: <span>$34.00</span>
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
                   <img src="/src/assets/img/course/2.png" alt="img" />
                 </div>
                 <div className="details">
                   <div className="details-inner">
                     <div className="emt-user">
                       <span className="u-thumb">
                         <img src="/src/assets/img/author/2.png" alt="img" />
                       </span>
                       <span className="align-self-center">Joe Powell</span>
                     </div>
                     <h6>
                       <a href="course-details.html">
                         Aenean sed nibh a magna posuere tempo faucib
                       </a>
                     </h6>
                   </div>
                   <div className="emt-course-meta">
                     <div className="row">
                       <div className="col-6">
                         <div className="rating">
                           <i className="fa fa-star" /> 4.3
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
           </div>
         </div>
       </div>
     </div>
   </div>
   {/* course area End */}
   {/* counter area start */}
   <div className="counter-area bg-gray">
     <div className="container">
       <div
         className="counter-area-inner pd-top-120 pd-bottom-120"
         style={{ backgroundImage: 'url("/src/assets/img/other/1.png")' }}
       >
         <div className="row">
           <div className="col-lg-8 mb-5 mb-lg-0">
             <div className="section-title mb-0">
               <h6 className="sub-title right-line">Funfact</h6>
               <h2 className="title">Strength in Numbers</h2>
               <p className="content pb-3">
                 The quick, brown fox jumps over a lazy dog. DJs flock by when
                 MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog,
                 flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
                 Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy
               </p>
               <div className="btn-counter bg-base mt-4">
                 <h3 className="left-val align-self-center">
                   <span className="counter">2.4</span>k+
                 </h3>
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
                     <img src="/src/assets/img/icon/1.png" alt="img" />
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
                     <img src="/src/assets/img/icon/2.png" alt="img" />
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
                     <img src="/src/assets/img/icon/3.png" alt="img" />
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
   <div className="work-area pd-top-110">
     <div className="container">
       <div className="section-title">
         <div className="row">
           <div className="col-lg-6 align-self-center">
             <h6 className="sub-title right-line">What we do</h6>
             <h2 className="title">How it works?</h2>
           </div>
           <div className="col-lg-6 align-self-center">
             <p className="content mt-lg-0">
               The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
               ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
               quartz, vex nymphs when MTV ax quiz
             </p>
           </div>
         </div>
       </div>
       <div className="row">
         <div className="col-lg-3 col-md-6">
           <div className="single-intro-inner style-icon-bg bg-gray text-center">
             <div className="thumb">
               <img src="/src/assets/img/icon/12.png" alt="img" />
               <div className="intro-count">1</div>
             </div>
             <div className="details">
               <h5>Sign up</h5>
               <p>
                 Ipsum yorem dolor amet sit elit. Duis at est id leosco for it
               </p>
               <a className="read-more-text" href="signup.html">
                 Read More <i className="fa fa-angle-right" />
               </a>
             </div>
           </div>
         </div>
         <div className="col-lg-3 col-md-6">
           <div className="single-intro-inner style-icon-bg bg-gray text-center">
             <div className="thumb">
               <img src="/src/assets/img/icon/13.png" alt="img" />
               <div className="intro-count">2</div>
             </div>
             <div className="details">
               <h5>Select course</h5>
               <p>
                 Ipsum yorem dolor amet sit elit. Duis at est id leosco for it
               </p>
               <a className="read-more-text" href="course.html">
                 Read More <i className="fa fa-angle-right" />
               </a>
             </div>
           </div>
         </div>
         <div className="col-lg-3 col-md-6">
           <div className="single-intro-inner style-icon-bg bg-gray text-center">
             <div className="thumb">
               <img src="/src/assets/img/icon/14.png" alt="img" />
               <div className="intro-count">3</div>
             </div>
             <div className="details">
               <h5>Start Learning</h5>
               <p>
                 Ipsum yorem dolor amet sit elit. Duis at est id leosco for it
               </p>
               <a className="read-more-text" href="course-details.html">
                 Read More <i className="fa fa-angle-right" />
               </a>
             </div>
           </div>
         </div>
         <div className="col-lg-3 col-md-6">
           <div className="single-intro-inner style-icon-bg bg-gray text-center">
             <div className="thumb">
               <img src="/src/assets/img/icon/15.png" alt="img" />
               <div className="intro-count">4</div>
             </div>
             <div className="details">
               <h5>Get Certificate</h5>
               <p>
                 Ipsum yorem dolor amet sit elit. Duis at est id leosco for it
               </p>
               <a className="read-more-text" href="blog-details.html">
                 Read More <i className="fa fa-angle-right" />
               </a>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   {/* work area end */}
   {/* testimonial area start */}
   <div className="testimonial-area pd-top-100">
     <div className="container">
       <div
         className="testimonial-area-inner bg-cover"
         style={{ backgroundImage: 'url("/src/assets/img/other/2.png")' }}
       >
         <img
           className="testimonial-right-img"
           src="/src/assets/img/other/3.png"
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
                   <img src="/src/assets/img/author/1.png" alt="img" />
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
                   <img src="/src/assets/img/author/2.png" alt="img" />
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
   {/* testimonial area end */}
   {/* team area start */}
   <div className="team-area pd-top-110">
     <div className="container-fluid pl-4 pr-4">
       <div className="row justify-content-center">
         <div className="col-xl-6 col-lg-7">
           <div className="section-title text-center">
             <h6 className="sub-title double-line">Meet Our Team</h6>
             <h2 className="title">Our Creative Team</h2>
           </div>
         </div>
       </div>
       <div className="team-slider owl-carousel">
         <div className="item">
           <div className="single-team-inner">
             <div className="thumb">
               <img src="/src/assets/img/team/1.png" alt="img" />
               <div className="social-wrap">
                 <div className="social-wrap-inner">
                   <a className="social-share" href="#">
                     <i className="fa fa-share-alt" />
                   </a>
                   <ul>
                     <li>
                       <a href="#">
                         <i className="fa fa-facebook" />
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fa fa-twitter" />
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fa fa-pinterest" />
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fa fa-linkedin" />
                       </a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
             <div className="details">
               <h4>
                 <a href="team-details.html">Doris Jordan</a>
               </h4>
               <span>Design Expert</span>
             </div>
           </div>
         </div>
         <div className="item">
           <div className="single-team-inner">
             <div className="thumb">
               <img src="/src/assets/img/team/2.png" alt="img" />
               <div className="social-wrap">
                 <div className="social-wrap-inner">
                   <a className="social-share" href="#">
                     <i className="fa fa-share-alt" />
                   </a>
                   <ul>
                     <li>
                       <a href="#">
                         <i className="fa fa-facebook" />
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fa fa-twitter" />
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fa fa-pinterest" />
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fa fa-linkedin" />
                       </a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
             <div className="details">
               <h4>
                 <a href="team-details.html">Eugen Freman</a>
               </h4>
               <span>Executive</span>
             </div>
           </div>
         </div>
         <div className="item">
           <div className="single-team-inner">
             <div className="thumb">
               <img src="/src/assets/img/team/3.png" alt="img" />
               <div className="social-wrap">
                 <div className="social-wrap-inner">
                   <a className="social-share" href="#">
                     <i className="fa fa-share-alt" />
                   </a>
                   <ul>
                     <li>
                       <a href="#">
                         <i className="fa fa-facebook" />
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fa fa-twitter" />
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fa fa-pinterest" />
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fa fa-linkedin" />
                       </a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
             <div className="details">
               <h4>
                 <a href="team-details.html">Jaction Leo</a>
               </h4>
               <span>Developer</span>
             </div>
           </div>
         </div>
         <div className="item">
           <div className="single-team-inner">
             <div className="thumb">
               <img src="/src/assets/img/team/4.png" alt="img" />
               <div className="social-wrap">
                 <div className="social-wrap-inner">
                   <a className="social-share" href="#">
                     <i className="fa fa-share-alt" />
                   </a>
                   <ul>
                     <li>
                       <a href="#">
                         <i className="fa fa-facebook" />
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fa fa-twitter" />
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fa fa-pinterest" />
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fa fa-linkedin" />
                       </a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
             <div className="details">
               <h4>
                 <a href="team-details.html">Jordan Feg</a>
               </h4>
               <span>Marketing Expert</span>
             </div>
           </div>
         </div>
         <div className="item">
           <div className="single-team-inner">
             <div className="thumb">
               <img src="/src/assets/img/team/5.png" alt="img" />
               <div className="social-wrap">
                 <div className="social-wrap-inner">
                   <a className="social-share" href="#">
                     <i className="fa fa-share-alt" />
                   </a>
                   <ul>
                     <li>
                       <a href="#">
                         <i className="fa fa-facebook" />
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fa fa-twitter" />
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fa fa-pinterest" />
                       </a>
                     </li>
                     <li>
                       <a href="#">
                         <i className="fa fa-linkedin" />
                       </a>
                     </li>
                   </ul>
                 </div>
               </div>
             </div>
             <div className="details">
               <h4>
                 <a href="team-details.html">Walson Jordan</a>
               </h4>
               <span>Ui/Ux Expert</span>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   {/* team area end */}
   {/*blog-area start*/}
   <div className="blog-area pd-top-80 pd-bottom-90">
     <div className="container">
       <div className="row justify-content-center">
         <div className="col-xl-6 col-lg-7">
           <div className="section-title text-center">
             <h6 className="sub-title double-line">Latest News</h6>
             <h2 className="title">Our Insights &amp; Articles</h2>
           </div>
         </div>
       </div>
       <div className="row">
         <div className="col-lg-4">
           <ul className="single-blog-list-wrap mb-5 mb-lg-0">
             <li>
               <div className="media single-blog-list-inner">
                 <div className="media-left date">
                   <span>JAN</span>
                   20
                 </div>
                 <div className="media-body details">
                   <ul className="blog-meta">
                     <li>
                       <i className="fa fa-user" /> BY ADMIN
                     </li>
                     <li>
                       <i className="fa fa-folder-open-o" /> Air transport
                     </li>
                   </ul>
                   <h5>
                     <a href="blog-details.html">
                       Duis pretium gravida enim maximus
                     </a>
                   </h5>
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
                     <li>
                       <i className="fa fa-user" /> BY ADMIN
                     </li>
                     <li>
                       <i className="fa fa-folder-open-o" /> Air transport
                     </li>
                   </ul>
                   <h5>
                     <a href="blog-details.html">
                       Maecenas interdum lorem eleifend
                     </a>
                   </h5>
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
                     <li>
                       <i className="fa fa-user" /> BY ADMIN
                     </li>
                     <li>
                       <i className="fa fa-folder-open-o" /> Air transport
                     </li>
                   </ul>
                   <h5>
                     <a href="blog-details.html">
                       Nunc scelerisque tincidunt elit.{" "}
                     </a>
                   </h5>
                 </div>
               </div>
             </li>
           </ul>
         </div>
         <div className="col-lg-8">
           <div className="row justify-content-center">
             <div className="col-md-6">
               <div className="single-blog-inner">
                 <div className="thumb">
                   <img src="/src/assets/img/blog/1.png" alt="img" />
                   <span className="date">28 JANUARY, 2020</span>
                 </div>
                 <div className="details">
                   <ul className="blog-meta">
                     <li>
                       <i className="fa fa-user" /> BY ADMIN
                     </li>
                     <li>
                       <i className="fa fa-folder-open-o" /> Air transport
                     </li>
                   </ul>
                   <h5>
                     <a href="blog-details.html">
                       Quisque suscipit ipsum est, eu venenatis leo
                     </a>
                   </h5>
                   <a className="read-more-text" href="blog-details.html">
                     READ MORE <i className="fa fa-angle-right" />
                   </a>
                 </div>
               </div>
             </div>
             <div className="col-md-6">
               <div className="single-blog-inner">
                 <div className="thumb">
                   <img src="/src/assets/img/blog/2.png" alt="img" />
                   <span className="date">28 JANUARY, 2020</span>
                 </div>
                 <div className="details">
                   <ul className="blog-meta">
                     <li>
                       <i className="fa fa-user" /> BY ADMIN
                     </li>
                     <li>
                       <i className="fa fa-folder-open-o" /> Air transport
                     </li>
                   </ul>
                   <h5>
                     <a href="blog-details.html">
                       Maecenas interdu rem eleifend orci aliquam
                     </a>
                   </h5>
                   <a className="read-more-text" href="blog-details.html">
                     READ MORE <i className="fa fa-angle-right" />
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   {/*blog-area end*/}
   {/*contact-area start*/}
   <div
     className="contact-area bg-overlay mt-200 pd-bottom-90"
     style={{ backgroundImage: 'url("/src/assets/img/banner/2.png")' }}
   >
     <div className="container">
       <div className="row">
         <div className="col-lg-8">
           <form className="contact-form-inner mt-mn-200 style-shadow">
             <div className="section-title">
               <h2 className="title">Request A Quote</h2>
               <p>We will be happy to answer your questions.</p>
             </div>
             <div className="row">
               <div className="col-md-6">
                 <div className="single-input-inner">
                   <input type="text" placeholder="Full name" />
                 </div>
               </div>
               <div className="col-md-6">
                 <div className="single-input-inner">
                   <input type="text" placeholder="Phone Number" />
                 </div>
               </div>
               <div className="col-md-6">
                 <div className="single-input-inner">
                   <input type="text" placeholder="Email Address" />
                 </div>
               </div>
               <div className="col-md-6">
                 <div className="single-input-inner">
                   <input type="text" placeholder="Subject" />
                 </div>
               </div>
               <div className="col-12">
                 <div className="single-input-inner">
                   <textarea placeholder="Your Message" defaultValue={""} />
                 </div>
               </div>
               <div className="col-sm-6 align-self-center">
                 <div className="single-input-inner style-checkbox">
                   <input type="checkbox" />
                   Also subscribe us
                 </div>
               </div>
               <div className="col-sm-6 text-sm-right">
                 <a className="btn btn-base" href="#">
                   Send Message
                 </a>
               </div>
             </div>
           </form>
         </div>
         <div className="col-lg-4 align-self-end">
           <div className="mt-5 mt-lg-0">
             <ul className="single-list-wrap">
               <li className="single-list-inner style-white style-check-box-grid-2">
                 <div className="media">
                   <div className="media-left">
                     <img src="/src/assets/img/icon/16.png" alt="img" />
                   </div>
                   <div className="media-body align-self-center">
                     <h5>Our Address</h5>
                     <p>PSD Building, 2 AlBahr</p>
                     <p>St, Loskia sripur</p>
                   </div>
                 </div>
               </li>
               <li className="single-list-inner style-white style-check-box-grid-2">
                 <div className="media">
                   <div className="media-left">
                     <img src="/src/assets/img/icon/17.png" alt="img" />
                   </div>
                   <div className="media-body align-self-center">
                     <h5>Our Phone</h5>
                     <p>+0029129102320</p>
                     <p>+000 2324 39493</p>
                   </div>
                 </div>
               </li>
               <li className="single-list-inner style-white style-check-box-grid-2">
                 <div className="media">
                   <div className="media-left">
                     <img src="/src/assets/img/icon/18.png" alt="img" />
                   </div>
                   <div className="media-body align-self-center">
                     <h5>Our Email</h5>
                     <p>name@website.com</p>
                     <p>Info@orex.com</p>
                   </div>
                 </div>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </div>
   </div>
   {/*contact-area end*/}
   {/* footer area start */}
  </>
 
 
  )
}

export default Home