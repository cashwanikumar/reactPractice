"use strict";

var React = require('react');

var bioData = React.createClass({
    render: function() {
        return (
            <div>
                <div className="col-md-12">
                    <img src="images/avatar.png" width="200" height="200" />
                </div>
                <div className="col-md-12">
                    <h3>Name</h3>
                </div>
                <div className="col-md-12">
                    loginId
                </div>
                <div className="col-md-12">
                    bioData
                </div>
            </div>
        );
    }
});

module.exports = bioData;