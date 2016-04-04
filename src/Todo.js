var PureRenderComponent = require('PureRenderComponent');
var TodoService = require('./TodoService');
var FadeIn = require('./FadeIn');
var Form = require('patlib/group/InputForm');
require('./todo.less');

module.exports = class Todo extends PureRenderComponent {
    deleteTodo() {
        this.state.todo.id && TodoService.deleteTodo(this.state.todo.id);
    }

    componentWillMount() {
        this.registerStoreKey(this.props.rsKey, 'todo');
    }


    render() {
        var todo = this.state.todo;
        return (
            <Row className={`todo ${todo.complete ? 'todo-complete' : ''}`}>
                <Col xs={12}>
                    <FadeIn duration={750}>
                        <div className="todo-description">
                            {todo.description}
                            <Form.BtnSecondary size="xs" disabled={!todo.id}
                                               onClick={this.deleteTodo.bind(this)}>Delete</Form.BtnSecondary>
                            <Form.InputCheckbox rsKey={`${this.props.rsKey}.complete`} name={`todo-${todo.id}`}
                                                className="pull-right" style={{marginRight: 10}}
                                                checked={todo.complete}/>
                        </div>
                    </FadeIn>
                </Col>
            </Row>
        );
    }
};


