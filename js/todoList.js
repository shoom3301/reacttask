/**
 * Created by Shoom on 08.06.2016.
 */

import React from 'react';
import TodoCreate from './todoCreate.js';
import TodoItem from './todoItem.js';

/**
 * Class of todo list
 */
let TodoList = React.createClass({
    getInitialState: function () {
        return {items: this.props.items};
    },
    /**
     * Callback for TodoCreate submit form event
     * @param text {string} new item text
     */
    addItem: function(text){
        this.state.items.push({text: text});
        this.setState({
            items: this.state.items
        });
    },
    render: function(){
        let items = this.state.items.map(function(item, index){
            return (<TodoItem key={index} model={item}/>);
        });
        return (
        <div id="todoList">
            <h2>Todo list</h2>
            <div className="todoCreate">
                <TodoCreate add={this.addItem}/>
            </div>
            <div className="todoItems">{items}</div>
        </div>
        );
    }
});

module.exports = TodoList;