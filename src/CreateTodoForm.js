var Component = require('Component');
var TodoService = require('./TodoService');
var Form = require('patlib/group/InputForm');
var Alert = require('patlib/core/Alert');
var ShowHide = require('patlib/group/ShowHide');

module.exports = class CreateTodoForm extends Component {

    createTodo() {
        var values = this.refs.createTodoForm.getValues();
        values.description ? doCreate.call(this) : this.setState({error: 'Description cannot be blank'});

        function doCreate() {
            TodoService.addTodo(values);
            this.setState({error: undefined});
            this.refs.createTodoForm.clear();
        }
    }

    render() {
        return (
            <div>
                <Form ref="createTodoForm" rsKey="create-todo-form">
                    <Form.InputText name="description" label="Todo description"/>
                </Form>
                <ShowHide show={this.state.error}>
                    <Alert>{this.state.error}</Alert>
                </ShowHide>
                <Form.BtnPrimary size="sm" onClick={this.createTodo.bind(this)}>Create todo</Form.BtnPrimary>
            </div>
        )
    }
};