var Component = require('./Component');
var TodoService = require('./TodoService');

module.exports = class TodoCount extends Component {

    componentWillMount() {
        this.registerStoreKey('todos');
    }

    render() {
        var todos = this.state.todos;
        return todos ? showCounts() : <div></div>;

        function showCounts() {
            return (
                <div>
                    <div>Total Todos: {todos.length}</div>
                    <div>Incomplete Todos: {todos.filter(todo => todo.complete !== true).length}</div>
                </div>
            )
        }
    }
};