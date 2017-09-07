/*
 * All router is defined
 * Route and default handler file will be setup
 */

"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
         <DefaultRoute handler={require('./components/homepage')} />
         <Route name="repo/:name" handler={require('./components/repo/repoIndex')} />
         <Route name="users/:id" handler={require('./components/profile/profileIndex')} />
    </Route>
);

module.exports = routes;