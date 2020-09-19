import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/global.scss";

export default class VoterPerks extends React.Component {

    render = () => (
        <div id="index">

            <Head
                title="Voter Perks - Eutenly"
                description="Vote for Eutenly on Top.GG and get some sweet perks"
            />
            <NavBar />

            <div className="intro">

                <div className="background-effect" />

                <div className="about">
                    <div className="about-content">

                        <h1 className="title">Voter Perks</h1>
                        <p className="info">Vote for Eutenly on Top.GG</p>

                        <div className="divider" />

                        <p className="description">Voting for Eutenly on Top.GG will give you some perks to expand how you can use the bot.</p>
                        <p className="description">Note that votes expire after 12 hours. To keep your perks, you just need to vote again.</p>

                        <a className="button" href="/vote" target="_blank">Vote</a>

                    </div>
                </div>

                <div className="intro-features-wrapper">
                    <div className="intro-features">

                        <p className="title">Enhance Your Experience</p>

                        <div className="intro-feature">

                            <div className="name">
                                <div className="divider" />
                                <img className="icon" src="/assets/search.svg" alt="Search icon" />
                                <p className="text">Search Rich Panels</p>
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
                                <img className="icon" src="/assets/twitter.svg" alt="Twitter logo" />
                                <p className="text">Twitter Feeds &amp; Actions</p>
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
                                <img className="icon" src="/assets/reddit.svg" alt="Reddit logo" />
                                <p className="text">Reddit Actions</p>
                                <div className="divider" />
                            </div>

                            <p className="learn-more" onClick={() => window.scrollTo({
                                top: document.querySelectorAll(".features .feature")[2].getBoundingClientRect().top + window.pageYOffset - 100,
                                behavior: "smooth"
                            })}>Learn More</p>

                        </div>

                        <p className="more-features" onClick={() => window.scrollTo({
                            top: document.querySelector(".features").getBoundingClientRect().top + window.pageYOffset - 100,
                            behavior: "smooth"
                        })}>More Features</p>

                    </div>
                </div>

            </div>

            <div className="features">

                <p className="title">Features</p>

                <div className="feature">

                    <div className="content">

                        <div className="name">
                            <div className="divider left" />
                            <img className="icon" src="/assets/search.svg" alt="Search icon" />
                            <p className="text">Search Rich Panels</p>
                            <div className="divider" />
                        </div>

                        <p className="description">Search Rich Panels allow you to view a lot of information in a single embed about key things like people, music, companies, and more.</p>
                        <p className="description">Rich Panels include people's social profiles, companies' products, music producers' albums, and music's lyrics</p>

                        <p className="ready-text">Ready to vote?</p>
                        <a className="button" href="/vote" target="_blank">Vote</a>

                    </div>

                    <img className="image" src="/assets/search-command.png" alt="An example of the Search command's result" />

                </div>

                <div className="feature right">

                    <div className="content">

                        <div className="name">
                            <div className="divider left" />
                            <img className="icon" src="/assets/twitter.svg" alt="Twitter logo" />
                            <p className="text">Twitter Feeds &amp; Actions</p>
                            <div className="divider" />
                        </div>

                        <p className="description">View your personalized Twitter feed right in Discord. Tweets will be displayed similar to how you would see them on Twitter.</p>
                        <p className="description">When viewing tweets, you can also like and retweet tweets. Eutenly's rich display of information provides an easy way to view content on Discord.</p>

                        <p className="ready-text">Ready to vote?</p>
                        <a className="button" href="/vote" target="_blank">Vote</a>

                    </div>

                    <img className="image right" src="/assets/youtube-command.png" alt="An example of the YouTube command's result" />

                </div>

                <div className="feature">

                    <div className="content">

                        <div className="name">
                            <div className="divider left" />
                            <img className="icon" src="/assets/reddit.svg" alt="Reddit logo" />
                            <p className="text">Reddit Actions</p>
                            <div className="divider" />
                        </div>

                        <p className="description">While browsing Reddit, enjoy the added benefit of being able to upvote and downvote posts right from Discord. Voting is as simple as reacting to a message.</p>
                        <p className="description">Eutenly also supports saving posts and viewing your saved posts. While viewing a post, add a reaction to save it to your Reddit account.</p>

                        <p className="ready-text">Ready to vote?</p>
                        <a className="button" href="/vote" target="_blank">Vote</a>

                    </div>

                    <img className="image" src="/assets/search-command.png" alt="An example of the Search command's result" />

                </div>

                <div className="feature right">

                    <div className="content">

                        <div className="name">
                            <div className="divider left" />
                            <img className="icon" src="/assets/link.svg" alt="Link icon" />
                            <p className="text">More Saved Links</p>
                            <div className="divider" />
                        </div>

                        <p className="description">Saved Links allow you to bookmark search results and links so you can quickly access them in the future. As a voter, your limit for the amount of posts you can save doubles from 15 to 30.</p>
                        <p className="description">You can view your saved links anytime in organized pages for easy viewing.</p>

                        <p className="ready-text">Ready to vote?</p>
                        <a className="button" href="/vote" target="_blank">Vote</a>

                    </div>

                    <img className="image right" src="/assets/youtube-command.png" alt="An example of the YouTube command's result" />

                </div>

                <div className="feature">

                    <div className="content">

                        <div className="name">
                            <div className="divider left" />
                            <img className="icon" src="/assets/spotify.svg" alt="Spotify logo" />
                            <p className="text">Modify Spotify Playlists</p>
                            <div className="divider" />
                        </div>

                        <p className="description">Found a song that you like? Have Eutenly add it to a playlist with a simple command to easily be able to listen to it again.</p>
                        <p className="description">You'll also be able to view your playlists, quickly get details about songs and artists, and even remove songs.</p>

                        <p className="ready-text">Ready to vote?</p>
                        <a className="button" href="/vote" target="_blank">Vote</a>

                    </div>

                    <img className="image" src="/assets/twitter-command.png" alt="An example of the Twitter command's result" />

                </div>

            </div>

            <Footer />

        </div>
    );

};