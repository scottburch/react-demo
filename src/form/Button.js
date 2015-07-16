var Component = require('../Component');

module.exports = class Button extends Component {
    render() {
        return (
            <button {...this.props}>{this.props.children}</button>
        )
    }
};