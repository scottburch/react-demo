Component = require('./Component');
Todo = require('./Todo');
CreateTodoForm = require('./CreateTodoForm');
RS = require('./RS');

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