var Component = require('./Component');
var TodoService = require('./TodoService');

module.exports = class Todo extends Component {
    deleteTodo() {
        this.props.id && TodoService.deleteTodo(this.props.id);
    }

    toggleComplete() {
        TodoService.toggleTodoComplete(this.props.id);
    }

    render() {
        return (
            <div style={{borderBottom: '1px solid #ccc', height: 30, textDecoration: this.props.complete ? 'line-through' : '', color: this.props.id ? 'black' : '#ccc'}}>
                <span> {this.props.description}</span>
                <div style={{float: 'right'}}>
                    <button disabled={!this.props.id} onClick={this.deleteTodo.bind(this)}>Delete</button>
                    <input type="checkbox" checked={this.props.complete} onChange={this.toggleComplete.bind(this)} />
                </div>
            </div>
        )
    }
};