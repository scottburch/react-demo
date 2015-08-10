var PureRenderComponent = require('PureRenderComponent');
var TodoService = require('./TodoService');
var Form = require('./form/Form');
var FadeIn = require('./FadeIn');

module.exports = class Todo extends PureRenderComponent {
    deleteTodo() {
        this.state.todo.id && TodoService.deleteTodo(this.state.todo.id);
    }

    componentWillMount() {
        this.registerStoreKey(this.props.rsKey, 'todo');
    }


    render() {
        console.log('todo render', JSON.stringify(this.state.todo));
        var todo = this.state.todo || {};
        return (
            <div
                style={{borderBottom: '1px solid #ccc', height: 30, textDecoration: todo.complete ? 'line-through' : '', color: todo.id ? 'black' : '#aaa'}}>
                <span> {todo.description}</span>

                <div style={{float: 'right'}}>
                    <Form.Button disabled={!todo.id} onClick={this.deleteTodo.bind(this)}>Delete</Form.Button>
                    <input type="checkbox" checked={todo.complete}
                           onChange={TodoService.toggleTodoComplete.bind(null, todo.id)}/>
                </div>
            </div>
        )
    }
};