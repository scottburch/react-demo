var Component = require('./Component');
var RS = require('./RS');

module.exports = class Todo extends Component {
    deleteTodo() {
        RS.set('todos', RS.get('todos').filter(todo => todo.id !== this.props.id));
    }

    completeTodo() {
        RS.set('todos', RS.get('todos').map(todo => todo.id === this.props.id ? _.extend(todo, {complete:true}) : todo));
    }

    render() {
        return (
            <div style={{borderBottom: '1px solid #ccc', height: 30, textDecoration: this.props.complete ? 'line-through' : ''}}>
                <span>{this.props.id}</span> {this.props.description}
                <div style={{float: 'right'}}>
                    {this.props.complete || <button onClick={this.completeTodo.bind(this)}>Complete</button>}
                    <button onClick={this.deleteTodo.bind(this)}>Delete</button>
                </div>
            </div>
        )
    }
};