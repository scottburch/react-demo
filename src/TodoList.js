var Component = require('Component');
var Todo = require('./Todo');
var TodoService = require('./TodoService');

module.exports = class TodoList extends Component {

    componentWillMount() {
        this.registerStoreKey('todos');
        TodoService.getTodos();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !!this.state.todos && this.state.todos.length !== nextState.todos.length;
    }

    render() {
        var todos = this.state.todos;
        return (
            <div>
                <h2>{text.todoListHeader}</h2>
                <Loading isLoading={!todos}>
                    {todos && todos.map((todo, idx) => <Todo key={idx} rsKey={`todos.${idx}`} />)}
                </Loading>
            </div>
        )
    }


};

var Loading = class Loading extends Component {
    render() {
        var {isLoading, children} = this.props;
        return isLoading ? <h1>I'm loading...</h1> : <div>{children}</div>;
    }
}
