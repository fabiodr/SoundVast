import React from "react";

export default () => (
    <form action="search/search" method="get" id="search">
        <i class="fa fa-search"></i>
        <input type="search" id="search" name="search" placeholder="Search" />

        <div id="filter">
            <span><strong>Syntax</strong></span>
        </div>
    </form>
);