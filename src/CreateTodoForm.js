var TodoService = require('./TodoService');
var Form = require('patlib/group/InputForm');
var Alert = require('patlib/core/Alert');
var ShowHide = require('patlib/group/ShowHide');

module.exports = class CreateTodoForm extends PureRenderComponent {

    createTodo() {
        var form = this.refs.createTodoForm;
        form.isValid() && doCreate.call(this);

        function doCreate() {
            TodoService.addTodo(form.getValues());
            form.clear();
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>
                <Form ref="createTodoForm" rsKey="create-todo-form">
                    <Form.InputText name="description" label="Todo description" required="Description cannot be blank"/>
                </Form>
                <Form.BtnPrimary onClick={this.createTodo.bind(this)}>Create todo</Form.BtnPrimary>
            </div>
        )
    }
};