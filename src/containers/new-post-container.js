import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { savePost } from '../actions/index';

class NewPostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: "",
            categories: "",
            content: ""
        };
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitPost.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input onChange={this.onTitleChange.bind(this)} value={this.state.title} required type="text" className="form-control" id="title" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="categories">Categories</label>
                        <input onChange={this.onCategoryChange.bind(this)} value={this.state.categories} required type="text" className="form-control" id="categories" placeholder="categories" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea onChange={this.onContentChange.bind(this)} value={this.state.content} className="form-control" name="content" id="content" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit" className="btn btn-success">Save</button>
                    <Link to="/" className="btn btn-default cancel-btn">Cancel</Link>
                </form>
            </div>
        );
    }

    onTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    onCategoryChange(event) {
        this.setState({ categories: event.target.value });
    }

    onContentChange(event) {
        this.setState({ content: event.target.value });
    }

    onSubmitPost(event) {
        event.preventDefault();
        this.props.savePost({
            title: this.state.title,
            categories: this.state.categories,
            content: this.state.content
        }, (postSaved) => this.props.history.push('/'));
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ savePost }, dispatch);
}

export default connect(null, mapDispatchToProps)(NewPostForm);