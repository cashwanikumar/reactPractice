"use strict";

var React = require('react');

var RepoCard = React.createClass({
    render: function() {
        return (
            <div className="col-md-6 repo-card">
                <div className="col-md-12">Repo name</div>
                <div className="col-md-12">description</div>
                <br />
                <div className="col-md-12">
                    <div className="col-md-4">
                        <span>Language</span>
                    </div>
                    <div className="col-md-4">
                        <span>Star</span>
                    </div>
                    <div className="col-md-4">
                        <span>fork</span>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = RepoCard;