/**
 * Created by Shoom on 08.06.2016.
 */

import React from 'react';

/**
 * Class of todo item
 */
let TodoItem = React.createClass({
    getInitialState: function () {
        return this.props.model;
    },
    remove: function(){

    },
    render: function(){
        return (
            <div className="todoItem">
                <div className="text">{this.state.text}</div>
                <div className="actions">
                    <button className="edit"></button>
                    <button onClick={this.remove} className="remove"></button>
                </div>
            </div>
        );
    }
});

module.exports = TodoItem;