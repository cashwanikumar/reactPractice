"use strict";

var React = require('react');
var EachBoard = require('./eachBoard');

var TechBoard = React.createClass({
    redirectToTech: function() {
        console.log('hello');
    },

    render: function() {
        var list = this.props.boardLists.map(function(boardList, index) {
            return (
                <EachBoard boardList={boardList} key={boardList.name} />
            );
        });

        return (
            <div>
                {list}
            </div>
        );
    }
});

module.exports = TechBoard;