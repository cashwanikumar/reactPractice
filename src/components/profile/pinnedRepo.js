"use strict";

var React = require('react');
var RepoCard = require('./repoCard');

var PinnedRepo = React.createClass({
    render: function() {
        return (
            <div>
                <div className="col-md-12">
                    <div className="col-md-2">Overview</div>
                    <div className="col-md-2">Repositories <span className="counter">0</span></div>
                    <div className="col-md-2">Stars <span className="counter">0</span></div>
                    <div className="col-md-2">Followers <span className="counter">0</span></div>
                    <div className="col-md-2">Following <span className="counter">0</span></div>
                </div>
                <div className="col-md-12">
                    <h3>Pinned repositiories</h3>
                </div>
                <div className="col-md-12">
                    <RepoCard />
                </div>
            </div>
        );
    }
});

module.exports = PinnedRepo;