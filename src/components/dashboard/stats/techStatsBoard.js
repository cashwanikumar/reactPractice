"use strict";

var React = require('react');
var EachRow = require('./eachRow');

var TechStatsBoard = React.createClass({
    getInitialState: function() {
        return {
            TechLists: [
                {
                    'name': 'javascript',
                    'count': '100'
                },
                {
                    'name': 'php',
                    'count': '100'
                },
                {
                    'name': 'java',
                    'count': '100'
                },
                {
                    'name': 'python',
                    'count': '100'
                }
            ]
        };
    },

    render: function() {
        var allRow = this.state.TechLists.map(function(listData) {
            return (
                <EachRow listData={listData} />
            );
        });

        return (
            <div className="col-md-12 col-sm-12 col-xs-12 board-wrap">
                <div className="row board">
                    <div className="col-md-12">
                        <h3>Languages </h3>
                    </div>
                    <br />
                    {allRow}
                </div>
            </div>
        );
    }
});

module.exports = TechStatsBoard;