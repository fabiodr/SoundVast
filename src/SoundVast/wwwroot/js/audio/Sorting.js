import React from "react";
import { Link } from 'found';

export default () => (
    <div className="row" id="body-header">
        <ul className="outer col-md-3"></ul>
        <ul className="outer col-md-6">
            <li className="title-holder">
                <Link to="categories" className="categories title">Categories</Link>
            </li>
            <li className="title-holder">
                <Link to="genres" className="genres title">Genres</Link>
            </li>
            <li className="title-holder">
                <Link to="newest" className="newest title">Newest</Link>
            </li>
            <li className="title-holder">
                <div className="rating title">Top Rated</div>
                <ul className="menu">
                    <li>
                        <Link to="toprated" className="rating">Today</Link>
                    </li>
                    <li>
                        <Link to="toprated" className="rating">Weekly</Link>
                    </li>
                    <li>
                        <Link to="toprated" className="rating">30 Day's</Link>
                    </li>
                    <li>
                        <Link to="toprated" className="rating">All Time</Link>
                    </li>
                </ul>
            </li>
            <li className="title-holder">
                <div className="commented title">Most Commented</div>
                <ul className="menu">
                    <li>
                        <Link to="mostcommented" className="comment">Today</Link>
                    </li>
                    <li>
                        <Link to="mostcommented" className="comment">Weekly</Link>
                    </li>
                    <li>
                        <Link to="mostcommented" className="comment">30 Day's</Link>
                    </li>
                    <li>
                        <Link to="mostcommented" className="comment">All Time</Link>
                    </li>
                </ul>
            </li>
            <li className="title-holder">
                <div className="played title">Most Played</div>
                <ul className="menu">
                    <li>
                        <Link to="mostplayed" className="played">Today</Link>
                    </li>
                    <li>
                        <Link to="mostplayed" className="played">Weekly</Link>
                    </li>
                    <li>
                        <Link to="mostplayed" className="played">30 Day's</Link>
                    </li>
                    <li>
                        <Link to="mostplayed" className="played">All Time</Link>
                    </li>
                </ul>
            </li>
        </ul>
        <ul className="outer col-md-3">
            <li className="pull-right">
                <i className="fa fa-random" data-toggle="tooltip" data-placement="bottom" title="Play random"></i>
            </li>
        </ul>
    </div>
);
