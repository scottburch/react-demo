var TodoList = require('./TodoList');
var CreateTodoForm = require('./CreateTodoForm');
var TodoCount = require('./TodoCount');
var State = require('./State');
var Component = require('PureRenderComponent');
require('style/bootstrap-3.3.5-dist/css/bootstrap.css');


var Demo = class Demo extends Component {
    render() {
        return (
            <div style={{padding: 10}}>
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
