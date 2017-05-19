import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AddPost extends Component {
    
    render() {
        return (
            <div>
                <Link to="/posts/new" className="btn btn-success">
                    Add post
                </Link>
            </div>
        );
    }
}