var Rtr = require('react-router');
var browserHistory = require('react-router/lib/browserHistory');

module.exports = class Router extends Component {
    render() {
        return (
            <Rtr.Router history={browserHistory}>
                <Rtr.Route component={require('./App')}>
                    <Rtr.Route path="/" component={require('./Home')}/>
                </Rtr.Route>
            </Rtr.Router>
        );
    }
};