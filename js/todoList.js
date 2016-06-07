/**
 * Created by Shoom on 08.06.2016.
 */

import React from 'react';
import TodoCreate from './todoCreate.js';

/**
 * Class of todo list
 */
let TodoList = React.createClass({
    /**
     * Callback for TodoCreate submit form event
     * @param text {string} new item text
     */
    addItem: function(text){

    },
    render: function(){
        return (
        <div id="todoList">
            <h2>Todo list</h2>
            <div className="todoCreate">
                <TodoCreate add={this.addItem}/>
            </div>
            <div className="todoItems"></div>
        </div>
        );
    }
});

module.exports = TodoList;