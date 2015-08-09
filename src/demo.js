var TodoList = require('./TodoList');
var CreateTodoForm = require('./CreateTodoForm');
var TodoCount = require('./TodoCount');
var State = require('./State');
var Component = require('Component');


var Demo = class Demo extends Component {
    render() {
        return (
            <div>
                <CreateTodoForm/>
                <hr/>
                <TodoList/>
                <TodoCount />
                <hr/>
                <State />
            </div>
        )
    }
}

Component.renderToDom(Demo,document.querySelector('#demo'));
