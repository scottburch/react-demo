var Component = require('Component');
var _ = require('lodash');

module.exports = class Button extends Component {
    setBold(bold) {
        setTimeout(() => this.mounted && this.setState({bold: bold}));
    }

    render() {
        var props = _.extend({},this.props);
        props.style = _.extend({}, props.style, {fontWeight: this.state && this.state.bold ? 'bold' : ''});
        return (
            <button {...props} onMouseUp={this.setBold.bind(this, false)} onMouseDown={this.setBold.bind(this, true)}>
                {this.props.children}
            </button>
        )
    }
};