import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "gatsby";
import "../styles/global.scss";

export default () => {
    return (
        <div id="index">

            <Head
                title="Eutenly"
                description="Eutenly is a universal search bot for Discord. Search the internet, YouTube, Twitter, Reddit, and a ton more services. We integrate with services allowing for rich displays of information, right in Discord."
            />
            <NavBar />

            <div className="intro">

                <div className="background-effect" />

                <div className="about">
                    <div className="about-content">

                        <h1 className="title">Eutenly</h1>
                        <p className="info">Discord's internet bot</p>

                        <div className="divider" />

                        <p className="description">Eutenly is a universal search bot for Discord. Search the internet, YouTube, Twitter, Reddit, and a ton more services.</p>
                        <p className="description">We integrate with services allowing for rich displays of information, right in Discord.</p>

                        <Link className="button" to="/invite">Invite Eutenly</Link>
                        <Link className="button-2" to="/support-server" target="_blank">Support Server</Link>

                    </div>
                </div>

                <div className="intro-features-wrapper">
                    <div className="intro-features">

                        <p className="title">Search The Internet</p>

                        <div className="intro-feature">

                            <div className="name">
                                <div className="divider" />
                                <img className="icon" src="/assets/search.svg" alt="Search icon" />
                                <p className="text">Search The Internet</p>
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
                                <img className="icon" src="/assets/youtube.svg" alt="YouTube logo" />
                                <p className="text">YouTube Integration</p>
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
                                <img className="icon" src="/assets/twitter.svg" alt="Twitter logo" />
                                <p className="text">Twitter Integration</p>
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
                            <p className="text">Search The Internet</p>
                            <div className="divider" />
                        </div>

                        <p className="description">Search the internet right from Discord with Eutenly's Search Command. Search results are embedded in an organized and elegant way, making it easy to view information. From there, you can easily get more info about any result.</p>
                        <p className="description">Eutenly also supports rich panels, song and artist info, lyrics, related questions, and a whole lot more.</p>

                        <p className="ready-text">Ready to try it?</p>
                        <Link className="button" to="/invite">Invite Eutenly</Link>

                    </div>

                    <img className="image" src="/assets/search-command.png" alt="An example of the Search command's result" />

                </div>

                <div className="feature right">

                    <div className="content">

                        <div className="name">
                            <div className="divider left" />
                            <img className="icon" src="/assets/youtube.svg" alt="YouTube logo" />
                            <p className="text">YouTube Integration</p>
                            <div className="divider" />
                        </div>

                        <p className="description">Search for YouTube videos, channels, and playlists with the YouTube Command. Eutenly uses YouTube's powerful search function to deliver the best results.</p>
                        <p className="description">View details about video view counts, like and dislike counts, amounts of comments, video lengths, channel subscriber counts, and more.</p>

                        <p className="ready-text">Ready to try it?</p>
                        <Link className="button" to="/invite">Invite Eutenly</Link>

                    </div>

                    <img className="image right" src="/assets/youtube-command.png" alt="An example of the YouTube command's result" />

                </div>

                <div className="feature">

                    <div className="content">

                        <div className="name">
                            <div className="divider left" />
                            <img className="icon" src="/assets/twitter.svg" alt="Twitter logo" />
                            <p className="text">Twitter Integration</p>
                            <div className="divider" />
                        </div>

                        <p className="description">Search Twitter to view tweets, profiles, and more. Eutenly gets data straight from Twitter to display up-to-date information right in Discord.</p>
                        <p className="description">Explore Twitter however you'd like. Not only can you view Tweets from specific people, but Eutenly also lets you view your timeline. You can even like and retweet Tweets while browsing.</p>

                        <p className="ready-text">Ready to try it?</p>
                        <Link className="button" to="/invite">Invite Eutenly</Link>

                    </div>

                    <img className="image" src="/assets/twitter-command.png" alt="An example of the Twitter command's result" />

                </div>

                <div className="feature right">

                    <div className="content">

                        <div className="name">
                            <div className="divider left" />
                            <img className="icon" src="/assets/spotify.svg" alt="Spotify logo" />
                            <p className="text">Spotify Integration</p>
                            <div className="divider" />
                        </div>

                        <p className="description">The Spotify Command lets you search for tracks, artists, albums, and more. You can even view your personal top tracks and artists, as well as your listening history.</p>
                        <p className="description">Eutenly's Spotify integration even lets you play, pause, and skip tracks, right from Discord. You can also share what you're currently listening to with the <code>e;spotify current</code> command. Found a song you like? Queue it up or save it to your library right from Discord.</p>

                        <p className="ready-text">Ready to try it?</p>
                        <Link className="button" to="/invite">Invite Eutenly</Link>

                    </div>

                    <img className="image right" src="/assets/spotify-command.png" alt="An example of the Spotify command's result" />

                </div>

                <div className="feature">

                    <div className="content">

                        <div className="name">
                            <div className="divider left" />
                            <img className="icon" src="/assets/reddit.svg" alt="Reddit logo" />
                            <p className="text">Reddit Integration</p>
                            <div className="divider" />
                        </div>

                        <p className="description">The Reddit Command lets you search for subreddits, posts, and users right from Discord. Eutenly embeds search results in a neat list for you to explore.</p>
                        <p className="description">Browse content the way you want. Eutenly's Reddit integration let's you view posts from subreddits, users, as well as your home feed. While viewing a post, you can even vote on it or save it.</p>

                        <p className="ready-text">Ready to try it?</p>
                        <Link className="button" to="/invite">Invite Eutenly</Link>

                    </div>

                    <img className="image" src="/assets/reddit-command.png" alt="An example of the Reddit command's result" />

                </div>

                <div className="feature right">

                    <div className="content">

                        <div className="name">
                            <div className="divider left highlight" />
                            <img className="icon" src="/assets/link.svg" alt="Link icon" />
                            <p className="text highlight">Saved Links</p>
                            <div className="divider highlight" />
                        </div>

                        <p className="description">Save search results and links with Eutenly so you can easily access them later. Enter links yourself or save search results directly from other commands.</p>
                        <p className="description">Saved links can be accessed whenever you'd like, and are displayed in neatly organized pages for easy viewing.</p>

                        <p className="ready-text highlight">Ready to try it?</p>
                        <Link className="button highlight" to="/invite">Invite Eutenly</Link>

                    </div>

                    <img className="image right" src="/assets/links-command.png" alt="An example of the Links command's result" />

                </div>

                <div className="feature">
                    <div>

                        <div className="name">
                            <div className="divider" />
                            <img className="icon margin" src="/assets/plus.svg" alt="Plus icon" />
                            <p className="text">More Features</p>
                            <div className="divider" />
                        </div>

                        <p className="description">Aside from YouTube, Twitter, Spotify, and Reddit integration, Eutenly also has the following features:</p>

                        <ul className="more-features">
                            <li>Wikipedia Search</li>
                            <li>Twitch Integration (Coming Soon)</li>
                            <li>Apple Music Integration (Coming Soon)</li>
                            <li>Medium Search (Coming Soon)</li>
                        </ul>

                        <p className="ready-text">Ready to try it?</p>
                        <Link className="button" to="/invite">Invite Eutenly</Link>

                    </div>
                </div>

            </div>

            <Footer />

        </div>
    );
};