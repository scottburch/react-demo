var TodoList = require('./TodoList');
var CreateTodoForm = require('./CreateTodoForm');
var TodoCount = require('./TodoCount');
var State = require('./State');
require('style/bootstrap-3.3.5-dist/css/bootstrap.css');


var Demo = class Demo extends Component {
    render() {
        return (
            <Grid>
                <hr/>
                <TodoList/>
                <TodoCount />
                <hr/>
                <CreateTodoForm/>
                <State />
            </Grid>
        )
    }
};

Component.renderToDom(Demo,document.querySelector('#demo'));
