import React from "react";

export default () => (
    <span>
        <span className="like-percentage">
            <i className="fa fa-thumbs-up" data-toggle="tooltip" data-placement="bottom" title="Like percentage"></i>
        </span>

        <div className="ratings-container">
            <div className="ratings-bar">                   
                <div className='like-bar' data-likes={this.props.likes}></div>
                <div className='dislike-bar' data-dislikes={this.props.dislikes}></div>
            </div>
        </div>
    </span>
);