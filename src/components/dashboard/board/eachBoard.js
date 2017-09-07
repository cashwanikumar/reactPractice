"use strict";

var React = require('react');

var EachBoard = React.createClass({
    render: function() {
        return (
            <div
                className="col-md-12 col-sm-12 col-xs-12 board-wrap"
                key={ this.props.boardList.name }
            >
                <div className="row board">
                    <div className="col-md-2">
                        <img src={"/images/" + this.props.boardList.image } className="img-responsive center-block board-logo" alt="test" />
                    </div>
                    <div className="col-md-10">
                        <h2 className="board-text">{ this.props.boardList.name }</h2>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = EachBoard;