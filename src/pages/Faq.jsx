import React from 'react'

const FAQ = () => {
  return (
    <div className='container sdf'>
      <div className="TC_header">
        <h2>FAQ</h2>
      </div>
      <div className="hori-line" style={{ marginBottom: "3rem" }}>
        <hr id='TC_hrLine' style={{ width: "50%" }} />
      </div>

      {/* faq section start */}
      <div class="faq-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <div class="about-area-inner">
                <div class="section-title mb-0">
                  <h2 class="title mt-0">Do You Have Any Questions</h2>
                  <p class="content">Have ipsum dolor sit amet, elitr, sed diam nonumy eirmod tempor invidunt
                    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo et ea rebum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti reiciendis velit obcaecati, totam perspiciatis consequuntur dicta excepturi aliquam illum dolorem, earum veniam quisquam deleniti quidem tempore repellendus numquam! Quidem magni nulla eveniet nobis unde repellendus, porro placeat iure at.
                  </p>

                </div>
              </div>
            </div>
            <div class="col-lg-7 mt-5 mt-lg-0">
              <div id="accordion" class="accordion-area">
                <div class="card single-faq-inner">
                  <div class="card-header" id="ff-one">
                    <h5 class="mb-0">
                      <button class="btn-link" data-toggle="collapse" data-target="#f-one"
                        aria-expanded="true" aria-controls="f-one">
                        01. What does you simply dummy in do ?
                        <i class="fa fa-eye"></i>
                      </button>
                    </h5>
                  </div>
                  <div id="f-one" class="show collapse" aria-labelledby="ff-one" data-parent="#accordion">
                    <div class="card-body">
                      What does you dummy text of free available in market printing has industry been
                      industry's standard dummy text ever.
                    </div>
                  </div>
                </div>
                <div class="card single-faq-inner">
                  <div class="card-header" id="ff-two">
                    <h5 class="mb-0">
                      <button class="btn-link collapsed" data-toggle="collapse" data-target="#f-two"
                        aria-expanded="true" aria-controls="f-two">
                        02. What graphics dummy of free design ?
                        <i class="fa fa-eye"></i>
                      </button>
                    </h5>
                  </div>
                  <div id="f-two" class="collapse" aria-labelledby="ff-two" data-parent="#accordion">
                    <div class="card-body">
                      What graphics simply dummy text of free available in market printing industry has
                      been industry's standard dummy text ever.
                    </div>
                  </div>
                </div>
                <div class="card single-faq-inner">
                  <div class="card-header" id="ff-three">
                    <h5 class="mb-0">
                      <button class="btn-link collapsed" data-toggle="collapse" data-target="#f-three"
                        aria-expanded="true" aria-controls="f-three">
                        03. Why we are the best ?
                        <i class="fa fa-eye"></i>
                      </button>
                    </h5>
                  </div>
                  <div id="f-three" class="collapse" aria-labelledby="ff-three" data-parent="#accordion">
                    <div class="card-body">
                      Why we are dummy text of free available in market printing industry has been
                      industry's standard dummy text ever.
                    </div>
                  </div>
                </div>
                <div class="card single-faq-inner">
                  <div class="card-header" id="ff-four">
                    <h5 class="mb-0">
                      <button class="btn-link collapsed" data-toggle="collapse" data-target="#f-four"
                        aria-expanded="true" aria-controls="f-four">
                        04. What industries dummy covered ?
                        <i class="fa fa-eye"></i>
                      </button>
                    </h5>
                  </div>
                  <div id="f-four" class="collapse" aria-labelledby="ff-four" data-parent="#accordion">
                    <div class="card-body">
                      What industries text of free available in market printing industry has been
                      industry's standard dummy text ever.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq section start */}


    </div>
  )
}

export default FAQ;
