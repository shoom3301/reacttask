import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './todoApp.js';

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <TodoApp />,
        document.getElementById('todoListHandler')
    );
});