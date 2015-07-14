var Component = require('./Component');
var Todo = require('./Todo');


module.exports = class TodoList extends Component {

    componentWillMount() {
        this.registerStoreKey('todos', []);
    }

    render() {
        return (
            <div>
                {this.state.todos.map(todo => <Todo key={todo.id} {...todo}/>)}
            </div>
        )
    }
};