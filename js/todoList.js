/**
 * Created by Shoom on 08.06.2016.
 */

import React from 'react';

let TodoList = React.createClass({
    render: function(){
        return (
        <div id="todoList">
            <h2>Todo list</h2>
            <div class="todoCreate"></div>
            <div class="todoItems"></div>
        </div>
        );
    }
});

module.exports = TodoList;