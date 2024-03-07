import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            {/* <!-- breadcrumb start --> */}
            <div class="breadcrumb-area bg-overlay" style={{ backgroundImage: "url('assets/img/bg/3.png')" }}>
                <div className="container">
                    <div className="breadcrumb-inner">
                        <div className="section-title mb-0 text-center">
                            <h2 className="page-title">Sign Up</h2>
                            <ul className="page-list">
                                <li><a href="index.html">Home</a></li>
                                <li>Sign Up</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- breadcrumb end --> */}

            {/* <!-- signup-page-Start --> */}
            <div className="signup-page-area pd-top-120 pd-bottom-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7">
                            <form className="signin-inner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="single-input-inner style-bg-border">
                                            <input type="text" placeHolder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="single-input-inner style-bg-border">
                                            <input type="text" placeHolder="Last Name" />
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
                                    <div className="col-12">
                                        <div className="single-input-inner style-bg-border">
                                            <input type="text" placeHolder="Confirm Password" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="single-checkbox-inner">
                                            <input type="checkbox" />
                                            By clicking "create account".
                                        </div>
                                    </div>
                                    <div className="col-12 mb-4">
                                        <button className="btn btn-base w-100">Create Account</button>
                                    </div>
                                    <div className="col-12">
                                        <span>By creating an account</span>
                                        <Link to="/sign-in"><strong> Signin</strong></Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- signup-page-end --> */}

        </>
    )
}

export default SignUp;
