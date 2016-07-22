var TodoService = require('./TodoService');
var Form = require('patlib/group/InputForm');
var Alert = require('patlib/core/Alert');
var ShowHide = require('patlib/group/ShowHide');
var App = require('./App');

module.exports = class CreateTodoForm extends PureRenderComponent {

    componentDidMount() {
        this.autorun(() =>
            this.setState({formComplete: _.every(this.refs.createTodoForm.getValues())}));
    }

    createTodo() {
        var form = this.refs.createTodoForm;
        form.isValid() && doCreate.call(this);

        function doCreate() {
            TodoService.addTodo(form.getValues());
            form.clear();
            App.goto('/');
        }
    }

    render() {
        return (
            <div>
                <Form ref="createTodoForm" rsKey="create-todo-form">
                    <Form.InputText defaultValue="" name="description" label="Todo description" required="Description cannot be blank" />
                </Form>
                <Form.BtnPrimary disabled={!this.state.formComplete} onClick={this.createTodo.bind(this)}>Create todo</Form.BtnPrimary>
            </div>
        )
    }
};