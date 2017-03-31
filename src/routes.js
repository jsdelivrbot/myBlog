import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/post_index';
import PostsNew from './components/post_new';


export default (
    <Route path="/" component={App} >
        <IndexRoute components={ PostsIndex } /> /* default show*/
        <Route path="/posts/new" components={ PostsNew } />
    </Route>
);