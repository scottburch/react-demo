Component = require('react').Component;

var nextId = 0;

module.exports = class CreateTodoForm extends Component {
    createTodo() {
        var description = this.refs.description.value;
        description && RS.set('todos', RS.get('todos').concat({id: nextId++, description: description}));
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