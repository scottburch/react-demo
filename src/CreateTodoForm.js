var Component = require('Component');
var TodoService = require('./TodoService');
var Form = require('patlib/group/InputForm');
var Alert = require('patlib/core/Alert');

module.exports = class CreateTodoForm extends Component {

    constructor() {
        super();
        this.state = {};
    }

    createTodo() {
        var values = RS.get('create-todo-form.values');
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
                {this.state.error && <Alert>{this.state.error}</Alert>}
                <Form.BtnPrimary size="sm" onClick={this.createTodo.bind(this)}>Create todo</Form.BtnPrimary>
            </div>
        )
    }
};