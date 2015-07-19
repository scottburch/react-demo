var Component = require('./Component');
var $j = require('jquery');

module.exports = class FadeIn extends Component {
    componentDidMount() {
        $j(this.refs.wrapper).fadeIn(this.props.duration === undefined ? 1000 : this.props.duration);

    }

    render() {
        return (
            <div ref="wrapper" style={{display: 'none'}}>
                {this.props.children}
            </div>
        )
    }
}