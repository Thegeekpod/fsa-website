import React from 'react'

const SignIn = () => {
    return (
        <div className='container'>

            {/* breadcrump start  */}
            <div class="breadcrumb-area bg-overlay" style={{backgroundImage:"url('assets/img/bg/3.png')"}}>
                <div className="container">
                    <div className="breadcrumb-inner">
                        <div className="section-title mb-0 text-center">
                            <h2 className="page-title">Sign In</h2>
                            <ul className="page-list">
                                <li><a href="index.html">Home</a></li>
                                <li>Sign In</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* breadcrump end  */}

            {/* signin start  */}

            <div className="signin-page-area pd-top-120 pd-bottom-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7">
                            <form className="signin-inner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="single-input-inner style-bg-border">
                                            <input type="text" placeHolder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="single-input-inner style-bg-border">
                                            <input type="text" placeHolder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="single-input-inner style-bg-border">
                                            <input type="text" placeHolder="Password" />
                                        </div>
                                    </div>
                                    <div className="col-12 mb-4">
                                        <button className="btn btn-base w-100">Sign In</button>
                                    </div>
                                    <div className="col-12">
                                        <a href="#">Forgottem Your Password</a>
                                        <a href="/sign-up"><strong> Signup</strong></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* signin end */}
        </div>
    )
}

export default SignIn;
