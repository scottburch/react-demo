var Component = require('Component');
var TodoService = require('./TodoService');
var Form = require('patlib/group/InputForm');

module.exports = class CreateTodoForm extends Component {

    createTodo() {
        var description = RS.get('create-todo-form.values.description');
        description && TodoService.addTodo({description: description});
        RS.set('create-todo-form.values.description', '');
    }

    render() {
        return (
            <div>
                <Form rsKey="create-todo-form">
                    <Form.InputText name="description" label="Todo description"/>
                </Form>
                <Form.BtnPrimary size="sm" onClick={this.createTodo.bind(this)}>Create todo</Form.BtnPrimary>
            </div>
        )
    }
};