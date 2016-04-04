var TodoService = require('./TodoService');
var Form = require('patlib/group/InputForm');
var Alert = require('patlib/core/Alert');
var ShowHide = require('patlib/group/ShowHide');

module.exports = class CreateTodoForm extends PureRenderComponent {

    createTodo() {
        this.refs.createTodoForm.isValid() && doCreate.call(this);

        function doCreate() {
            TodoService.addTodo(this.refs.createTodoForm.getValues());
            this.setState({error: undefined});
            this.refs.createTodoForm.clear();
        }
    }

    render() {
        return (
            <div>
                <Form ref="createTodoForm" rsKey="create-todo-form">
                    <Form.InputText name="description" label="Todo description" required="Description cannot be blank"/>
                </Form>
                <Form.BtnPrimary size="sm" onClick={this.createTodo.bind(this)}>Create todo</Form.BtnPrimary>
            </div>
        )
    }
};