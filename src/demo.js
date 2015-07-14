reactDom = require('react-dom');
TodoList = require('./TodoList');
React = require('react');
CreateTodoForm = require('./CreateTodoForm');
TodoCount = require('./TodoCount');

reactDom.render((
        <div>
            <CreateTodoForm/>
            <hr/>
            <TodoList/>
            <TodoCount />
        </div>),
    document.querySelector('#demo'));
