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
        return {items: this.props.items || []};
    },
    /**
     * Begin item id
     */
    itemId: 0,
    updateItems: function(items){
        this.setState({ items: items || this.state.items });
        localStorage.setItem('todoListData', JSON.stringify(this.state.items));
    },
    /**
     * Callback for TodoCreate submit form event
     * @param text {string} new item text
     */
    addItem: function(text){
        this.itemId++;
        this.state.items.push({
            id: this.itemId,
            index: this.state.items.length+1,
            text: text
        });
        this.updateItems();
    },
    /**
     * Remove item from list
     * @param id {int} id of item
     */
    removeItem: function(id){
        let items = this.state.items;
        for(let i=0; i<items.length; i++){
            if(items[i].id == id){
                items.splice(i, 1);
                break;
            }
        }
        this.updateItems(items);
    },
    render: function(){
        return (
        <div id="todoList">
            <h2>Todo list</h2>
            <div className="todoCreate">
                <TodoCreate add={this.addItem}/>
            </div>
            <div className="todoItems">{this.getItems()}</div>
        </div>
        );
    },
    /**
     * Array of todos list
     * @returns {Array}
     */
    getItems: function(){
        return this.state.items.map((item, index) => {
            return (<TodoItem key={index} model={item} remove={this.removeItem}/>);
        });
    }
});

module.exports = TodoList;