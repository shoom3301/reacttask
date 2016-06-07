import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todoList.js';

let items = JSON.parse(localStorage.getItem('todoListData'));

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <TodoList items={items}/>,
        document.getElementById('todoListHandler')
    );
});