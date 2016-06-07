/**
 * Created by Shoom on 08.06.2016.
 */

import React from 'react';
import TodoItem from './todoItem.js';

let TodoList = React.createClass({
    getInitialState: function () {
        return {items: this.props.items};
    },
    render: function(){
        return (
            <ul>{this.getItems()}</ul>
        );
    },
    /**
     * Array of todos list
     * @returns {Array}
     */
    getItems: function(){
        return this.state.items.map((item) => {
            return (<TodoItem key={item.id} model={item} remove={this.props.removeItem} update={this.props.saveItem}/>);
        });
    }
});

module.exports = TodoList;