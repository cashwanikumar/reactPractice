"use strict";

var React = require('react');

var EachRow = React.createClass({
    render: function() {
        return (
            <div className="col-md-12">
                <div className="col-md-6">
                    {this.props.listData.name}
                </div>
                <div className="col-md-6">
                    {this.props.listData.count}
                </div>
            </div>
        );
    }
});

module.exports = EachRow;