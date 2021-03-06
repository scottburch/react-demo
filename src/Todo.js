var TodoService = require('./TodoService');
var FadeIn = require('./FadeIn');
var Form = require('patlib/group/InputForm');
require('./todo.less');

module.exports = class Todo extends AutoComponent.Class {
    deleteTodo() {
        M.Maybe.of(RS.get(this.props.rsKey).id).map(TodoService.deleteTodo);
    }

    render() {
        var todo = RS.get(this.props.rsKey);

        return (
            <Row className={`todo ${todo.complete ? 'todo-complete' : ''} ${todo.id ? '' : 'todo-saving'}`}>
                <Col xs={12}>
                    <FadeIn duration={750}>
                        <div className="todo-description">
                            {todo.description}
                            <Form.BtnSecondary size="xs" disabled={!todo.id}
                                               onClick={this.deleteTodo.bind(this)}>Delete</Form.BtnSecondary>
                            <Form.InputCheckbox rsKey={`${this.props.rsKey}.complete`} name={`todo-${todo.id}`}
                                                className="pull-right" style={{marginRight: 10}}
                                                checked={todo.complete}
                                                disabled={!todo.id}/>
                        </div>
                    </FadeIn>
                </Col>
            </Row>
        );
    }
};


