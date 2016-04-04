var Component = require('Component')
var RS = require('./RS');
//var localStorage = require('web-storage')().localStorage;
var Form = require('patlib/group/InputForm');

loadStoredState();

module.exports = class State extends Component {
    getState() {
        this.refs.stateForm.setValue('state', JSON.stringify(RS.dump()));
    }

    saveState() {
        localStorage.setItem('state', this.refs.stateForm.getValue('state'));
    }

    clearState() {
        localStorage.removeItem('state');
        this.refs.stateForm.setValue('state', '');
    }

    render() {
        return (
            <Form ref="stateForm" rsKey="stateForm">
                <Form.InputTextArea name="state" rows="4"/>
                <Form.BtnGroup>
                    <Btn onClick={this.getState.bind(this)}>Get State</Btn>
                    <Btn onClick={this.saveState.bind(this)}>Save State</Btn>
                    <Btn onClick={this.clearState.bind(this)}>Clear State</Btn>
                </Form.BtnGroup>
            </Form>
        )
    }
};

var Btn = props => <Form.BtnSecondary size="xs" {...props}>{props.children}</Form.BtnSecondary>;

function loadStoredState() {
    M.Maybe.of(localStorage.getItem('state'))
        .map(JSON.parse)
        .map(RS.load);
}