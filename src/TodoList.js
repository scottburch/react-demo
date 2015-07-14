var Component = require('./Component');
var Todo = require('./Todo');
var TodoService = require('./TodoService');

module.exports = class TodoList extends Component {


    componentWillMount() {
        this.registerStoreKey('todos', []);
        TodoService.getTodos();
    }

    render() {
        return (
            <div>
                {this.state.todos.map(todo => <Todo key={todo.id} {...todo}/>)}
            </div>
        )
    }
};