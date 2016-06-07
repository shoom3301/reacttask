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
     * Update list of items (and save to localStorage)
     * @param items {array|undefined} array of items (as default this.state.items)
     */
    updateItems: function(items){
        this.setState({ items: typeof items == 'array' ? items : this.state.items });
        localStorage.setItem('todoListData', JSON.stringify(this.state.items));
    },
    /**
     * Save item data to localStorage
     * @param item {object} item model
     */
    saveItem: function(item){
        let items = this.state.items;
        for(let i=0; i<items.length; i++){
            if(items[i].id == item.id){
                items[i] = item;
                break;
            }
        }
        localStorage.setItem('todoListData', JSON.stringify(items));
    },
    /**
     * Callback for TodoCreate submit form event
     * @param text {string} new item text
     */
    addItem: function(text){
        this.state.items.push({
            id: Date.now(),
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
        return this.state.items.map((item) => {
            return (<TodoItem key={item.id} model={item} remove={this.removeItem} update={this.saveItem}/>);
        });
    }
});

module.exports = TodoList;