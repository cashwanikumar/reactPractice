"use strict";

var React = require('react');

var EachRepoBody = React.createClass({
    render: function() {
        return (
            <div className="col-md-12 card-border">
                <div className="col-md-4">
                    <div className="col-md-12">airbnb/javascript</div>
                    <div className="col-md-12">JavaScript Style Guide</div>
                    <div className="col-md-12">
                        <span>Javascript</span>
                        <span>arrow-function</span>
                        <span>naming-convention</span>
                    </div>                    
                </div>
                <div className="col-md-4">javascript</div>
                <div className="col-md-4">58k</div>
            </div>
        );
    }
});

module.exports = EachRepoBody;