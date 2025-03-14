import React from 'react';
import {Link} from "react-router-dom";
import Header from "./Header";

const Home = () => {
    return (

        <div className="container">
            <div className="container fixed-bottom mb-5 mw-50 mh-50">
                <div className="row row-cols-3 mb-5 justify-content-center">
                    <div className="col-3">
                        <Link to="/readings">
                            <img src="/img/magazine.png" className="img-responsive mx-auto d-block" alt="Readings"/>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/seventhtradition">
                            <img src="/img/donation.png" className="img-responsive mx-auto d-block" alt="7 Tradisjon"/>
                        </Link>
                    </div>
                    <div className="col-3">
                        <Link to="/meetings">
                            <img src="/img/conference.png" className="img-responsive mx-auto d-block" alt="Møten"/>
                        </Link>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-cols-4 justify-content-center">
                        <div className="col-3">
                            <Link to="/slope">
                                <img src="/img/snowboard.png" className="img-responsive mx-auto d-block"
                                     alt="Løypekart"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/contact">
                                <img src="/img/mail.png" className="img-responsive mx-auto d-block" alt="Contact"/>
                            </Link>
                        </div>
                        <div className="col-3">
                            <Link to="/registration">
                                <img src="/img/register.png" className="img-responsive mx-auto d-block"
                                     alt="Registration"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;