"use strict";

var React = require('react');
var EachBodyIndex = require('./eachRepoBody');
var TechStatsBoard = require('../../dashboard/stats/techStatsBoard');

var RepoBodyIndex = React.createClass({
    render: function() {
        return (
            <div>
                <div className="col-md-8 repo-body">
                    <div className="col-md-12 card-border">
                        <h2>290,215 repository results</h2>
                    </div>
                    <EachBodyIndex />
                </div>
                <div className="col-md-4 repo-body">
                    <TechStatsBoard />
                </div>
            </div>
        );
    }
});

module.exports = RepoBodyIndex;