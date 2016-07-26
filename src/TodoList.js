var Todo = require('./Todo');

module.exports = AutoComponent(() => {
    var todos = RS.get('todos') || [];
    return (
        <div>
            <h2>Todos</h2>
            <Loading isLoading={!todos.length}>
                {todos.map((todo, idx) => <Todo key={idx} rsKey={`todos.${idx}`} />)}
            </Loading>
        </div>
    )
});

var Loading = ({isLoading, children}) => isLoading ? <h1>I'm loading...</h1> : <div>{children}</div>;
