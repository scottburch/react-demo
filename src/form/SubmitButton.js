var Button = require('./Button');
var Component = require('../Component');

module.exports = class ActionButton extends Component {
    render() {
        return <Button style={{backgroundColor: '#8888ff', color: '#eee'}} {...this.props} />
    }
};