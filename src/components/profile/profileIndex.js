"use strict";

var React = require('react');
var BioData = require('./bioData');
var PinnedRepo = require('./pinnedRepo');

var ProfileIndex = React.createClass({
    render: function() {
        return (
            <div className="repo-body">
                <div className="col-md-3">
                    <BioData />
                </div>
                <div className="col-md-9">
                    <PinnedRepo />
                </div>
            </div>
        );
    }
});

module.exports = ProfileIndex;