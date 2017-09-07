"use strict";

var React = require('react');
var TechBoard = require('./board/techBoard');
var TechStatsBoard = require('./stats/techStatsBoard');

var DashboardMain = React.createClass({
    getInitialState: function() {
        return {
            boardLists: [
                {
                    'name': 'javascript',
                    'image': 'js-logo.png'
                },
                {
                    'name': 'php',
                    'image': 'php-logo.png'
                },
                {
                    'name': 'java',
                    'image': 'java-logo.png'
                },
                {
                    'name': 'python',
                    'image': 'python-logo.png'
                }
            ]
        };
    },

    render: function() {
        return (
            <div className="row">
                <div className="col-md-7">
                    <TechBoard boardLists={this.state.boardLists} />
                </div>
                <div className="col-md-5">
                    <TechStatsBoard />
                </div>
            </div>
        );
    }
});

module.exports = DashboardMain;