var Component = require('Component')
var RS = require('./RS');
var localStorage = require('web-storage')().localStorage;
var Form = require('patlib/group/InputForm');

loadStoredState();

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
                <Form.InputTextArea rsKey='state' rows="4"/>
                <Form.BtnGroup>
                    <Form.BtnSecondary onClick={this.getState.bind(this)}>Get State</Form.BtnSecondary>
                    <Form.BtnSecondary onClick={this.saveState.bind(this)}>Save State</Form.BtnSecondary>
                    <Form.BtnSecondary onClick={this.clearState.bind(this)}>Clear State</Form.BtnSecondary>
                </Form.BtnGroup>
            </div>
        )
    }
};

var Btn = props => <Form.Btn size="sm" style={{marginRight: 5}} {...props}>{props.children}</Form.Btn>;

function loadStoredState() {
    var state = localStorage.get('state');
    state && RS.load(JSON.parse(state));
}