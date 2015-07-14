reactDom = require('react-dom');
TodoList = require('./TodoList');
React = require('react');
CreateTodoForm = require('./CreateTodoForm');

reactDom.render(<div><CreateTodoForm/><TodoList/></div>, document.querySelector('#demo'));
