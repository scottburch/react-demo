var Component = require('Component')
var RS = require('./RS');
var localStorage = require('web-storage')().localStorage;
var Form = require('patlib/group/InputForm');

var state = localStorage.get('state');
state && RS.load(JSON.parse(state));

module.exports = class State extends Component {
    getState() {
        this.refs.state.value = JSON.stringify(RS.dump());
    }

    saveState() {
        localStorage.set('state', this.refs.state.value);
    }

    clearState() {
        localStorage.remove('state');
        this.refs.state.value = '';
    }

    render() {
        return (
            <div>
                <textarea ref="state" style={{width: '100%', marginBottom: 10}} rows="4"/>
                <div>
                    <Btn onClick={this.getState.bind(this)}>Get State</Btn>
                    <Btn onClick={this.saveState.bind(this)}>Save State</Btn>
                    <Btn onClick={this.clearState.bind(this)}>Clear State</Btn>
                </div>
            </div>

        )
    }
};

var Btn = props => <Form.Btn size="sm" style={{marginRight: 5}} {...props}>{props.children}</Form.Btn>;
