Component = require('react').Component;
Todo = require('./Todo');
CreateTodoForm = require('./CreateTodoForm');
RS = require('./RS');

module.exports = class TodoList extends Component {
    constructor() {
        this.state = {todos:  []};
        RS.set('todos', this.state.todos);
    }

    componentDidMount() {
        RS.autorun(() => this.setState({todos: RS.get('todos')}));
    }

    render() {
        return (
            <div>
                {this.state.todos.map(todo => <Todo key={todo.id} {...todo}/>)}
            </div>
        )
    }
};