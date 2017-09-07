"use strict";

var React = require('react');
var RepoTopIndex = require('./repoTop/repoTopIndex');
var RepoBodyIndex = require('./repoBody/repoBodyIndex');

var RepoIndex = React.createClass({
    render: function() {
        return (
            <div>
                <RepoTopIndex />
                <RepoBodyIndex />
            </div>
        );
    }
});

module.exports = RepoIndex;