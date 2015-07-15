var Component = require('./Component')
var RS = require('./RS');
var localStorage = require('web-storage')().localStorage;

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
                <textarea ref="state" style={{width: '100%'}} rows="10"/>
                <div>
                    <button onClick={this.getState.bind(this)}>Get State</button>
                    <button onClick={this.saveState.bind(this)}>Save State</button>
                    <button onClick={this.clearState.bind(this)}>Clear State</button>
                </div>
            </div>
        )
    }
}