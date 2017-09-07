"use strict";

var React = require('react');
var RepoInfo = require('./repoInfo');
var Search = require('./search');

var RepoIndex = React.createClass({
    render: function() {
        return (
            <div className="col-md-12">
                <div className="col-md-4">
                    <Search />
                </div>
                <div className="col-md-8">
                    <RepoInfo />
                </div>
            </div>
        );
    }
});

module.exports = RepoIndex;