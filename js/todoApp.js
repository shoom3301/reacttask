/**
 * Created by Shoom on 08.06.2016.
 */

import React from 'react';
import TodoList from './todoList.js';
import TodoCreate from './todoCreate.js';

/**
 * Class of todo list
 */
let TodoApp = React.createClass({
    storageKey: 'todoListData',
    getInitialState: function () {
        return {items: JSON.parse(localStorage.getItem(this.storageKey)) || []};
    },
    /**
     * Update list of items (and save to localStorage)
     * @param items {array|undefined} array of items (as default this.state.items)
     */
    updateItems: function(items){
        this.setState({ items: typeof items == 'array' ? items : this.state.items });
        localStorage.setItem(this.storageKey, JSON.stringify(this.state.items));
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
        localStorage.setItem(this.storageKey, JSON.stringify(items));
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
            <div className="todoItems">
                <TodoList items={this.state.items} updateItems={this.updateItems} saveItem={this.saveItem} removeItem={this.removeItem}/>
            </div>
        </div>
        );
    }
});

module.exports = TodoApp;