var Component = require('./Component');
var TodoService = require('./TodoService');

var RS = require('./RS');

var nextId = new Date().getTime();

module.exports = class CreateTodoForm extends Component {

    createTodo() {
        var description = this.refs.description.value;
        TodoService.addTodo({description: description});
        this.refs.description.value = "";
    }

    render() {
        return (
            <div>
                <div>Todo description: <input ref="description" /></div>
                <div><button onClick={this.createTodo.bind(this)}>Create todo</button></div>
            </div>
        )
    }
};