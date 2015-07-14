var reactDom = require('react-dom');
var TodoList = require('./TodoList');
var React = require('react');
var CreateTodoForm = require('./CreateTodoForm');
var TodoCount = require('./TodoCount');
var State = require('./State');

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
