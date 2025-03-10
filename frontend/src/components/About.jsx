import React from 'react';

const About = () => {
    return (
        <div>
            <section className="about" id="about">
                <div className="content">
                    <div className="items">
                        <div className="image">
                            <img src="./assets/about.jpg" alt="Travel destinations and adventures" style={{ borderRadius: '5px' }} />
                        </div>
                        <div className="item">
                            <div className="item-content">
                                <h2 className="about-title">About Us</h2>
                                <div className="about-desc">
                                    <p>
                                        At Journey-Junction, we specialize in crafting personalized travel experiences.
                                    </p>
                                    <p>
                                        Our dedicated team ensures seamless booking and insider guidance to create unforgettable adventures tailored to your preferences.
                                    </p>
                                    <p>
                                        Explore pristine beaches, vibrant cities, and cultural wonders with us. Let's turn your travel dreams into reality today.
                                    </p>
                                </div>
                            </div>

                            <div className="item-data">
                                <div className="col">
                                    <h1>387</h1>
                                    <span>Completed Trips</span>
                                </div>
                                <div className="col">
                                    <h1>71</h1>
                                    <span>Tour Guides</span>
                                </div>
                                <div className="col">
                                    <h1>46</h1>
                                    <span>Destinations</span>
                                </div>
                            </div>
                            <button className="btn-explore">
                                Explore More <i className="ri-arrow-right-line"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
