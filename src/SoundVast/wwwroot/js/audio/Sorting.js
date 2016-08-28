import React from "react";
import { Link } from "react-router";

export default () => (
    <div class="row" id="body-header">
        <ul class="outer col-md-3"></ul>
        <ul class="outer col-md-6">
            <li class="title-holder">
                <Link to="categories" class="categories title">Categories</Link>
            </li>
            <li class="title-holder">
                <Link to="genres" class="genres title">Genres</Link>
            </li>
            <li class="title-holder">
                <Link to="newest" class="newest title">Newest</Link>
            </li>
            <li class="title-holder">
                <div class="rating title">Top Rated</div>
                <ul class="menu">
                    <li>
                        <Link to="toprated" class="rating">Today</Link>
                    </li>
                    <li>
                        <Link to="toprated" class="rating">Weekly</Link>
                    </li>
                    <li>
                        <Link to="toprated" class="rating">30 Day's</Link>
                    </li>
                    <li>
                        <Link to="toprated" class="rating">All Time</Link>
                    </li>
                </ul>
            </li>
            <li class="title-holder">
                <div class="commented title">Most Commented</div>
                <ul class="menu">
                    <li>
                        <Link to="mostcommented" class="comment">Today</Link>
                    </li>
                    <li>
                        <Link to="mostcommented" class="comment">Weekly</Link>
                    </li>
                    <li>
                        <Link to="mostcommented" class="comment">30 Day's</Link>
                    </li>
                    <li>
                        <Link to="mostcommented" class="comment">All Time</Link>
                    </li>
                </ul>
            </li>
            <li class="title-holder">
                <div class="played title">Most Played</div>
                <ul class="menu">
                    <li>
                        <Link to="mostplayed" class="played">Today</Link>
                    </li>
                    <li>
                        <Link to="mostplayed" class="played">Weekly</Link>
                    </li>
                    <li>
                        <Link to="mostplayed" class="played">30 Day's</Link>
                    </li>
                    <li>
                        <Link to="mostplayed" class="played">All Time</Link>
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="outer col-md-3">
            <li class="pull-right">
                <i class="fa fa-random" data-toggle="tooltip" data-placement="bottom" title="Play random"></i>
            </li>
        </ul>
    </div>
);