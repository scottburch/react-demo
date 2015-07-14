var Component = require('./Component')

module.exports = class State extends Component {
    getState() {
        this.refs.state.value = JSON.stringify(RS.dump());
    }

    setState() {
        RS.load(JSON.parse(this.refs.state.value));
    }

    render() {
        return (
            <div>
                <textarea ref="state" style={{width: '100%'}} rows="10"/>
                <div>
                    <button onClick={this.getState.bind(this)}>Get State</button>
                    <button onClick={this.setState.bind(this)}>Set State</button>
                </div>
            </div>
        )
    }
}