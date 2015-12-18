var PureRenderComponent = require('PureRenderComponent');
var TodoService = require('./TodoService');
var FadeIn = require('./FadeIn');
var Form = require('patlib/group/InputForm');


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
            <Row style={{borderBottom: '1px solid #ccc', paddingBottom: 10, paddingTop: 10}}>
                <Col xs={12}>
                    <FadeIn duration={750}>
                        <div style={{textDecoration: todo.complete ? 'line-through' : '', color: todo.id ? 'black' : '#aaa'}}>
                            <span> {todo.description}</span>
                                    <Form.Btn size="sm" disabled={!todo.id}
                                              onClick={this.deleteTodo.bind(this)} className="pull-right">Delete</Form.Btn>
                            <input className="pull-right" style={{marginRight: 10}} type="checkbox" checked={todo.complete} onChange={TodoService.toggleTodoComplete.bind(null, todo.id)}/>
                        </div>
                    </FadeIn>
                </Col>
            </Row>
        )
    }
};


