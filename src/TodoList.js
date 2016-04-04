var Component = require('Component');
var Todo = require('./Todo');
var TodoService = require('./TodoService');

module.exports = class TodoList extends Component {

    componentWillMount() {
        this.registerStoreKey('todos');
        TodoService.getTodos();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return _.size(this.state.todos) !== _.size(nextState.todos);
    }

    render() {
        var todos = this.state.todos || [];
        return (
            <div>
                <h2>Todos</h2>
                <Loading isLoading={!todos.length}>
                    {todos.map((todo, idx) => <Todo key={idx} rsKey={`todos.${idx}`} />)}
                </Loading>
            </div>
        )
    }


};

var Loading = props => props.isLoading ? <h1>I'm loading...</h1> : <div>{props.children}</div>;
