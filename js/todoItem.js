/**
 * Created by Shoom on 08.06.2016.
 */

import React from 'react';
import TodoCreate from './todoCreate.js';

/**
 * Class of todo item
 */
let TodoItem = React.createClass({
    getInitialState: function () {
        this.props.model.editable = false;
        return this.props.model;
    },
    /**
     * Remove item
     */
    remove: function(){
        typeof this.props.remove == 'function' && this.props.remove(this.state.id);
    },
    edit: function(){
        this.setState({ editable: !this.state.editable });
    },
    update: function(text){
        this.setState({ text: text, editable: false}, function(){
            typeof this.props.update == 'function' && this.props.update(this.state);
        });
    },
    render: function(){
        return (
            <li className="todoItem">
                {this.state.editable
                    ? <TodoCreate text={this.state.text} add={this.update}/>
                    : <div className="text">{this.state.text}</div>
                }
                <div className="actions">
                    <button onClick={this.edit} className="edit"></button>
                    <button onClick={this.remove} className="remove"></button>
                </div>
            </li>
        );
    }
});

module.exports = TodoItem;