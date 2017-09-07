"use strict";

var React = require('react');

var RepoInfo = React.createClass({
    render: function() {
        return (
            <div className="col-md-12">
                <div className="col-md-2">Repositories <span className="counter">0</span></div>
                <div className="col-md-2">Code <span className="counter">0</span></div>
                <div className="col-md-2">Commits <span className="counter">0</span></div>
                <div className="col-md-2">Issue <span className="counter">0</span></div>
                <div className="col-md-2">Wikis <span className="counter">0</span></div>
                <div className="col-md-2">Users <span className="counter">0</span></div>
            </div>
        );
    }
});

module.exports = RepoInfo;