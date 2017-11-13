import React from "react";
import { Link } from 'found';

export default class Upload extends React.Component {
    render(){
        return (
            <div>
                <h1>Upload Page ({this.props.params.id})</h1>
                <Link to="/">Audio</Link>
            </div>
        );
    }
}
