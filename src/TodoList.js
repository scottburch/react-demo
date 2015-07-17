var Component = require('./Component');
var Todo = require('./Todo');
var TodoService = require('./TodoService');

var nextKey = 0;

module.exports = class TodoList extends Component {


    componentWillMount() {
        this.registerStoreKey('todos');
        TodoService.getTodos();
    }

    render() {
        var todos = this.state.todos;
        return (
            <div>
                {todos ? todos.map(todo => <Todo key={nextKey++} {...todo}/>) : <h1>LOADING...</h1>}
            </div>
        )
    }
};