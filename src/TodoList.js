var Component = require('./Component');
var Todo = require('./Todo');
var CreateTodoForm = require('./CreateTodoForm');
var RS = require('./RS');


module.exports = class TodoList extends Component {

    registerStoreKeys() {
        return {todos: []};
    }

    render() {
        return (
            <div>
                {this.state.todos.map(todo => <Todo key={todo.id} {...todo}/>)}
            </div>
        )
    }
};