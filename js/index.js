import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todoList.js';

let items = [
    {index: 1, text: 'asdasdasd'}
];

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        <TodoList items={items}/>,
        document.getElementById('todoListHandler')
    );
});