import React, { Component } from 'react';
import PostsContainer from '../containers/posts-container';
import AddPost from '../containers/add-post-container';

class Main extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="pull-right">
                        <AddPost />
                    </div>
                </div>
                <div className="row">
                    <PostsContainer />
                </div>
            </div>
        );
    }
}

export default Main;