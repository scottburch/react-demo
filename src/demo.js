var TodoList = require('./TodoList');
var CreateTodoForm = require('./CreateTodoForm');
var TodoCount = require('./TodoCount');
var State = require('./State');
var Component = require('PureRenderComponent');
require('style/bootstrap-3.3.5-dist/css/bootstrap.css');


var Demo = class Demo extends Component {
    render() {
        return (
            <Grid>
                <CreateTodoForm/>
                <hr/>
                <TodoList/>
                <TodoCount />
                <hr/>
                <State />
            </Grid>
        )
    }
}

Component.renderToDom(Demo,document.querySelector('#demo'));
