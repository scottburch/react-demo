Component = require('react').Component;

module.exports = class TodoCount extends Component {
    constructor() {
        this.state = {todos: []};
    }

    componentDidMount() {
        RS.autorun(() => this.setState({todos: RS.get('todos')}));
    }

    render() {
        return (
            <div>
                <div>Total Todos: {this.state.todos.length}</div>
                <div>Incomplete Todos: {this.state.todos.filter(todo => todo.complete !== true).length}</div>
            </div>
        )
    }
};