import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './main';
import NewPostForm from '../containers/new-post-container';
import PostDetails from '../components/post-details';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/posts/new" component={NewPostForm} />
            <Route path="/posts/:id" component={PostDetails} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
