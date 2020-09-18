import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import "../styles/global.scss";

export default () => (
    <div id="index">

        <Head
            title="Partner Programme - Eutenly"
            description="Eutenly Partner Programme"
        />
        <NavBar />

        <div className="intro">

            <div className="background-effect" />

            <div className="about">
                <div className="about-content">

                    <h1 className="title">Partners</h1>
                    <p className="info">Introducing the Eutenly Partner Programme</p>

                    <div className="divider" />

                    <p className="description">The Eutenly Partner Programme is the easiest way to get your content on Discord.</p>
                    <p className="description">With the Eutenly Partner Programme, we can bring your site/app's content to our over 1000 users, which helps you provide a more multi-channel experience.</p>

                    <a className="button" href="mailto:partners@eutenly.com">Contact Us</a>

                </div>
            </div>

            <div className="intro-features-wrapper">
                <div className="intro-features">

                    <p className="title">Our Services</p>

                    <div className="intro-feature">

                        <div className="name">
                            <div className="divider" />
                            {/* <img className="icon" src="/assets/logo.svg" /> */}
                            <p className="text">Content Delivery</p>
                            <div className="divider" />
                        </div>

                        <p className="learn-more" onClick={() => window.scrollTo({
                            top: document.querySelectorAll(".features .feature")[0].getBoundingClientRect().top + window.pageYOffset - 100,
                            behavior: "smooth"
                        })}>Learn More</p>

                    </div>

                    <div className="intro-feature">

                        <div className="name">
                            <div className="divider" />
                            {/* <img className="icon" src="/assets/youtube.svg" /> */}
                            <p className="text">User Engagement</p>
                            <div className="divider" />
                        </div>

                        <p className="learn-more" onClick={() => window.scrollTo({
                            top: document.querySelectorAll(".features .feature")[1].getBoundingClientRect().top + window.pageYOffset - 100,
                            behavior: "smooth"
                        })}>Learn More</p>

                    </div>

                    <div className="intro-feature">

                        <div className="name">
                            <div className="divider" />
                            {/* <img className="icon" src="/assets/twitter.svg" /> */}
                            <p className="text">Onboarding</p>
                            <div className="divider" />
                        </div>

                        <p className="learn-more" onClick={() => window.scrollTo({
                            top: document.querySelectorAll(".features .feature")[2].getBoundingClientRect().top + window.pageYOffset - 100,
                            behavior: "smooth"
                        })}>Learn More</p>

                    </div>

                    {/* <p className="more-features" onClick={() => window.scrollTo({
                        top: document.querySelector(".features").getBoundingClientRect().top + window.pageYOffset - 100,
                        behavior: "smooth"
                    })}>More Features</p> */}

                </div>
            </div>

        </div>

        <div className="features">

            <p className="title">How it works</p>

            <div className="feature">

                <div className="content">

                    <div className="name">
                        <div className="divider left" />
                        {/* <img className="icon" src="/assets/google.svg" /> */}
                        <p className="text">Content Delivery</p>
                        <div className="divider" />
                    </div>

                    <p className="description">With Eutenly Partner Programme, our users will be able to access your site's content right from Discord.</p>
                    <p className="description">Eutenly supports rich content such as knowledge panels, videos, images, and much more. We'll do what we can to make your site's experience fluid on Discord.</p>

                    <p className="ready-text">Ready to join Eutenly Partners?</p>
                    <a className="button"  href="mailto:partners@eutenly.com">Contact Us</a>

                </div>

                <img className="image" src="/assets/google-command.png" alt="An example of the Google command's result" />

            </div>

            <div className="feature right">

                <div className="content">

                    <div className="name">
                        <div className="divider left" />
                        {/* <img className="icon" src="/assets/youtube.svg" /> */}
                        <p className="text">User Engagement</p>
                        <div className="divider" />
                    </div>

                    <p className="description">Eutenly Interactions allow users to interactive with features of your site from Discord.</p>
                    <p className="description">You can allow Eutenly users to login with your site/app and start engaging with your site's content in moments.</p>

                    <p className="ready-text">Ready to join Eutenly Partners?</p>
                    <a className="button"  href="mailto:partners@eutenly.com">Contact Us</a>

                </div>

                <img className="image right" src="/assets/youtube-command.png" alt="An example of the YouTube command's result" />

            </div>

            <div className="feature">

                <div className="content">

                    <div className="name">
                        <div className="divider left" />
                        {/* <img className="icon" src="/assets/twitter.svg" /> */}
                        <p className="text">Onboarding</p>
                        <div className="divider" />
                    </div>

                    <p className="description">When users discover your content on Eutenly, we can then onboard users onto your full site/app through a Eutenly Funnel.</p>
                    <p className="description">Users who enjoy your content through Eutenly are much more likely to go onto making a full account on your site.</p>

                    <p className="ready-text">Ready to join Eutenly Partners?</p>
                    <a className="button"  href="mailto:partners@eutenly.com">Contact Us</a>

                </div>

                <img className="image" src="/assets/twitter-command.png" alt="An example of the Twitter command's result" />

            </div>

            <div className="feature">
                <div>

                    <div className="name">
                        <div className="divider" />
                        <img className="icon margin" src="/assets/plus.svg" />
                        <p className="text">Join Eutenly Partners</p>
                        <div className="divider" />
                    </div>

                    <p className="description">Contact us so we can discuss how we can make Eutenly work for you.</p>

                    <a className="button"  href="mailto:partners@eutenly.com">Contact Us</a>

                </div>
            </div>

        </div>

    </div>
);