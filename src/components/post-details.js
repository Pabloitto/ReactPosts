import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostDetail extends Component {

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    onDeletePost() {
        this.props.deletePost(this.props.match.params.id, () => this.props.history.push("/"));
    }

    render() {
        const post = this.props.posts ? this.props.posts.find(item => parseInt(this.props.match.params.id, 10) === item.id) : {};

        if (!post) {
            return <div></div>
        }

        return (
            <div>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <div className="caption">
                                <h3>{post.title}</h3>
                                <p>{post.categories}</p>
                                <p>{post.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-danger" onClick={this.onDeletePost.bind(this)}>Delete</button>
                <Link className="btn btn-success cancel-btn" to="/">Back</Link>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchPost, deletePost }, dispatch);
}

const mapStateToProps = ({ posts }) => {
    return { posts };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);