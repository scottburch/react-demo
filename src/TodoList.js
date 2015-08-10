var Component = require('Component');
var Todo = require('./Todo');
var TodoService = require('./TodoService');

var testing =  'testing';

module.exports = class TodoList extends Component {


    componentWillMount() {
        this.registerStoreKey('todos');
        TodoService.getTodos();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !!this.state.todos && this.state.todos.length !== nextState.todos.length;
    }

    render() {
        console.log('todoList render');
        var todos = this.state.todos;
        return (
            <div>
                <h2>{text.todoListHeader}</h2>
                {todos ? todos.map((todo, idx) => <Todo key={idx} rsKey={`todos.${idx}`} />) : <h1>LOADING...</h1>}
            </div>
        )
    }
};