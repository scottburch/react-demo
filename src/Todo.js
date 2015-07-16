var Component = require('./Component');
var TodoService = require('./TodoService');
var Form = require('./form/Form');

module.exports = class Todo extends Component {
    deleteTodo() {
        this.props.id && TodoService.deleteTodo(this.props.id);
    }

    render() {
        return (
            <div style={{borderBottom: '1px solid #ccc', height: 30, textDecoration: this.props.complete ? 'line-through' : '', color: this.props.id ? 'black' : '#ccc'}}>
                <span> {this.props.description}</span>
                <div style={{float: 'right'}}>
                    <Form.Button disabled={!this.props.id} onClick={this.deleteTodo.bind(this)}>Delete</Form.Button>
                    <input type="checkbox" checked={this.props.complete} onChange={TodoService.toggleTodoComplete.bind(null, this.props.id)} />
                </div>
            </div>
        )
    }
};