var TodoList = require('./TodoList');
var TodoCount = require('./TodoCount');


module.exports = () => (
    <Row>
        <TodoList/>
        <TodoCount />
    </Row>
);
    