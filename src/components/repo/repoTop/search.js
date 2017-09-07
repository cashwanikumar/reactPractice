"use strict";

var React = require('react');

var Search = React.createClass({
    render: function() {
        return (
            <div className="col-md-12"> 
                <div class="col-md-7 col-sm-6 col-xs-12 top-mar">
                    <div className="search-wrap">
                        <input type="text" className="form-control search-input" name="" id="serach-web" placeholder="Search"/>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Search;