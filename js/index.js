import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todoList.js';

let items = localStorage.getItem('todoListData');
if(items){
    items = JSON.parse(items);
}else{
    items = [];
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <TodoList items={items}/>,
        document.getElementById('todoListHandler')
    );
});