var Rtr = require('react-router');

module.exports = class Router extends Component {
    render() {
        return (
            <Rtr.Router history={require('react-router/lib/browserHistory')}>
                <Rtr.Route path="/" component={require('./App')}>
                    <Rtr.IndexRoute component={require('./Home')} />
                    <Rtr.Route path="state" component={require('./State')} />
                    <Rtr.Route path="create" component={require('./CreateTodoForm')} />
                </Rtr.Route>
            </Rtr.Router>
        );
    }
};