import React, { Component } from 'react';
import PostItem from '../components/post-item-component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.renderPosts(this.props.posts || [])}
                </ul>
            </div>
        );
    }

    renderPosts(posts) {
        return posts.map((post, index) => <PostItem key={index} {...post}/>)
            .sort((a, b) => a.id - b.id);
    }

}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchPosts }, dispatch);
}

const mapStateToProps = ({ posts }) => {
    return { posts };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);