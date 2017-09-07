"use strict";

var React = require('react');
var DashboardMain = require('./dashboard/dashboardMain');

var HomePage = React.createClass({
    render: function() {
        return (
            <div>
                <DashboardMain />
            </div>
        );
    }
});

module.exports = HomePage;