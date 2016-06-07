/**
 * Created by Shoom on 08.06.2016.
 */

import React from 'react';
import Sortable from 'sortablejs';
import TodoItem from './todoItem.js';

let TodoList = React.createClass({
    getInitialState: function () {
        return {items: this.props.items};
    },
    render: function(){
        return (
            <ul ref="list">{this.getItems()}</ul>
        );
    },
    componentDidMount: function(){
        //Make list sortable
        this.sortable = Sortable.create(this.refs.list, {
            onEnd: this.updateIndexes
        });
    },
    /**
     * Update indexes of items
     * @param e {object} sortable event
     */
    updateIndexes: function(e){
        let indexes = {};
        let nodes = e.item.parentNode.childNodes;
        for(let i=0; i<nodes.length; i++){
            indexes[nodes[i].getAttribute('data-id')] = i;
        }

        let items = this.state.items;
        for(let i=0; i<items.length; i++){
            items[i].index = indexes[items[i].id];
        }

        this.props.updateItems && this.props.updateItems(items);
    },
    /**
     * Array of todos list
     * @returns {Array}
     */
    getItems: function(){
        return this.state.items.sort(function(a, b){
            return a.index - b.index;
        }).map((item) => {
            return (<TodoItem key={item.id} model={item} remove={this.props.removeItem} update={this.props.saveItem}/>);
        });
    }
});

module.exports = TodoList;