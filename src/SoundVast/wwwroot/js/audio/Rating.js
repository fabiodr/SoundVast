import React from "react";

export default () => (
    <span>
        <span class="like-percentage">
            <i class="fa fa-thumbs-up" data-toggle="tooltip" data-placement="bottom" title="Like percentage"></i>
        </span>

        <div class="ratings-container">
            <div class="ratings-bar">                   
                <div class='like-bar' data-likes={this.props.likes}></div>
                <div class='dislike-bar' data-dislikes={this.props.dislikes}></div>
            </div>
        </div>
    </span>
);