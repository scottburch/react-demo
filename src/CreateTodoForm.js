var Component = require('./Component');
var TodoService = require('./TodoService');
var Form = require('./form/Form');

var RS = require('./RS');

var nextId = new Date().getTime();

module.exports = class CreateTodoForm extends Component {

    createTodo() {
        var description = this.refs.description.value;
        description && TodoService.addTodo({description: description});
        this.refs.description.value = "";
    }

    render() {
        return (
            <div>
                <div>Todo description: <input ref="description" /></div>
                <div><Form.Button onClick={this.createTodo.bind(this)}>Create todo</Form.Button></div>
            </div>
        )
    }
};