var ShowHide = require('patlib/group/ShowHide');

module.exports = AutoComponent(() => {
    var todos = RS.get('todos');
    return (
        <ShowHide show={!!todos}>
            <div>Total Todos: {todos.length}</div>
            <div>Incomplete Todos: {todos.filter(todo => !todo.complete).length}</div>
        </ShowHide>
    );
});

