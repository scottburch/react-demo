var Component = require('Component');
var Todo = require('./Todo');
var TodoService = require('./TodoService');

module.exports = class TodoList extends AutoComponent.Class {

    componentWillMount() {
        TodoService.getTodos();
    }

    render() {
        var todos = RS.get('todos') || [];
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

var Loading = ({isLoading, children}) => isLoading ? <h1>I'm loading...</h1> : <div>{children}</div>;
