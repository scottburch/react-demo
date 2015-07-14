reactDom = require('react-dom');
TodoList = require('./TodoList');
React = require('react');
CreateTodoForm = require('./CreateTodoForm');
TodoCount = require('./TodoCount');
State = require('./State');

reactDom.render((
        <div>
            <CreateTodoForm/>
            <hr/>
            <TodoList/>
            <TodoCount />
            <hr/>
            <State />
        </div>),
    document.querySelector('#demo'));
