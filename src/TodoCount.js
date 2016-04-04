var ShowHide = require('patlib/group/ShowHide');

module.exports = class TodoCount extends PureRenderComponent {

    componentWillMount() {
        this.registerStoreKey('todos');
    }

    render() {
        var todos = this.state.todos;
        return (
            <ShowHide show={!!todos}>
                <div>Total Todos: {todos.length}</div>
                <div>Incomplete Todos: {todos.filter(todo => !todo.complete).length}</div>
            </ShowHide>
        );
    }
};