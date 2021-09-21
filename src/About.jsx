import React from 'react';
import web from './images/img3.webp'
import { NavLink } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                
                                <div className="col-lg-6 order-1 order-lg-1 header-img">
                                    <img src={web} className="img-fluid animated" alt="Home img" />
                                </div>

                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex flex-column justify-content-center">
                                    <h1> Welcome to Gahlot <strong className="brand-name"> Gahlot </strong></h1>
                                    <h2 className="my-3">
                                        We are the team of talented developer making websites
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to='/' className="btn-get-started">
                                            Home
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;