Component = require('react').Component;
RS = require('./RS');


var nextId = new Date().getTime();

module.exports = class CreateTodoForm extends Component {

    createTodo() {
        var description = this.refs.description.value;
        description && RS.set('todos', RS.get('todos').concat({id: nextId++, description: description}));
        this.refs.description.value = "";
    }

    render() {
        return (
            <div>
                <div>Todo description: <input defaultValue="" ref="description" /></div>
                <div><button onClick={this.createTodo.bind(this)}>Create todo</button></div>
            </div>
        )
    }
};