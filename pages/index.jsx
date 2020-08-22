import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import "./global.scss";

export default class Index extends React.Component {

    render = () => (
        <div id="index">

            <Head
                title="Eutenly"
                description="Discord's internet bot"
            />
            <NavBar />

            <div className="intro">

                <div className="background-effect" />

                <div className="about">
                    <div className="about-content">

                        <h1 className="title">Eutenly</h1>
                        <p className="info">Discord's internet bot</p>

                        <div className="divider" />

                        <p className="description">Eutenly is a universal search bot for Discord. Search Google, YouTube, Twitter, Reddit, and a ton more services.</p>
                        <p className="description">We integrate with services allowing for rich displays of information, right in Discord.</p>

                        <a className="button" href="/invite">Invite Eutenly</a>
                        <a className="button-2" href="/support-server" target="_blank">Support Server</a>

                    </div>
                </div>

                <div className="intro-features-wrapper">
                    <div className="intro-features">

                        <p className="title">Search the Internet</p>

                        <div className="intro-feature">

                            <div className="name">
                                <div className="divider" />
                                <img className="icon" src="/assets/google.svg" />
                                <p className="text">Google Search</p>
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
                                <img className="icon" src="/assets/youtube.svg" />
                                <p className="text">YouTube Search</p>
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
                                <img className="icon" src="/assets/twitter.svg" />
                                <p className="text">Twitter Search</p>
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
                            <img className="icon" src="/assets/google.svg" />
                            <p className="text">Google Search</p>
                            <div className="divider" />
                        </div>

                        <p className="description">Search Google right from Discord with Eutenly's Google Command. Search results are embedded in an organized and elegant way, making it easy to view information. From there, you can easily get more info about any result.</p>
                        <p className="description">Eutenly even supports knowledge panels, song and artist info, lyrics, related questions, and a whole lot more.</p>

                        <p className="ready-text">Ready to try it?</p>
                        <a className="button" href="/invite">Invite Eutenly</a>

                    </div>

                    <img className="image" src="/assets/google-command.png" alt="An example of the Google command's result" />

                </div>

                <div className="feature right">

                    <div className="content">

                        <div className="name">
                            <div className="divider left" />
                            <img className="icon" src="/assets/youtube.svg" />
                            <p className="text">YouTube Search</p>
                            <div className="divider" />
                        </div>

                        <p className="description">Search for YouTube videos, channels, and playlists with the YouTube Command. Eutenly uses YouTube's powerful search function to deliver the best results.</p>
                        <p className="description">View details about video view counts, like and dislike counts, amounts of comments, video lengths, channel subscriber counts, and more.</p>

                        <p className="ready-text">Ready to try it?</p>
                        <a className="button" href="/invite">Invite Eutenly</a>

                    </div>

                    <img className="image right" src="/assets/youtube-command.png" alt="An example of the YouTube command's result" />

                </div>

                <div className="feature">

                    <div className="content">

                        <div className="name">
                            <div className="divider left" />
                            <img className="icon" src="/assets/twitter.svg" />
                            <p className="text">Twitter Search</p>
                            <div className="divider" />
                        </div>

                        <p className="description">Search Twitter to view tweets, profiles, and hashtags. Eutenly gets data straight from Twitter to display up-to-date information right in Discord.</p>
                        <p className="description">Explore Twitter however you'd like. Maybe start with a search, view a tweet, check the replies, go to someone's profile, etc.</p>

                        <p className="ready-text">Ready to try it?</p>
                        <a className="button" href="/invite">Invite Eutenly</a>

                    </div>

                    <img className="image" src="/assets/twitter-command.png" alt="An example of the Twitter command's result" />

                </div>

                <div className="feature right">

                    <div className="content">

                        <div className="name">
                            <div className="divider left" />
                            <img className="icon" src="/assets/reddit.svg" />
                            <p className="text">Reddit Search</p>
                            <div className="divider" />
                        </div>

                        <p className="description">The Reddit Command lets you search for subreddits, posts, and users right from Discord. Eutenly embeds search results in a neat list for you to explore.</p>
                        <p className="description">Browse content the way you want. The Reddit command is continuous in a way that you can view a post's replies, visit someone's profile, view their posts, etc.</p>

                        <p className="ready-text">Ready to try it?</p>
                        <a className="button" href="/invite">Invite Eutenly</a>

                    </div>

                    <img className="image right" src="/assets/reddit-command.png" alt="An example of the Reddit command's result" />

                </div>

                <div className="feature">

                    <div className="content">

                        <div className="name">
                            <div className="divider left highlight" />
                            <img className="icon" src="/assets/link.svg" />
                            <p className="text highlight">Saved Links</p>
                            <div className="divider highlight" />
                        </div>

                        <p className="description">Save search results and links with Eutenly so you can easily access them later. Enter links yourself or save search results directly from other commands.</p>
                        <p className="description">Saved links can be accessed whenever you'd like, and are displayed in neatly organized pages for easy viewing.</p>

                        <p className="ready-text highlight">Ready to try it?</p>
                        <a className="button highlight" href="/invite">Invite Eutenly</a>

                    </div>

                    <img className="image" src="/assets/links-command.png" alt="An example of the Links command's result" />

                </div>

                <div className="feature">
                    <div>

                        <div className="name">
                            <div className="divider" />
                            <img className="icon margin" src="/assets/plus.svg" />
                            <p className="text">More Features</p>
                            <div className="divider" />
                        </div>

                        <p className="description">Aside from Google, YouTube, Twitter, and Reddit search, Eutenly also has the following features:</p>

                        <ul className="more-features">
                            <li>Medium Search</li>
                            <li>Steam Search</li>
                            <li>Top.GG Search</li>
                            <li>Domain Name Search</li>
                        </ul>

                        <p className="ready-text">Ready to try it?</p>
                        <a className="button" href="/invite">Invite Eutenly</a>

                    </div>
                </div>

            </div>

        </div>
    );

};