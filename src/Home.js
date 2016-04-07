var TodoList = require('./TodoList');
var CreateTodoForm = require('./CreateTodoForm');
var TodoCount = require('./TodoCount');
var State = require('./State');


module.exports = () => (
    <Grid>
        <hr/>
        <TodoList/>
        <TodoCount />
        <hr/>
        <CreateTodoForm/>
        <State />
    </Grid>
);
    