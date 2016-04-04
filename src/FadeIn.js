var PureRenderComponent = require('PureRenderComponent');
var $j = require('jquery');

module.exports = class FadeIn extends PureRenderComponent {
    componentDidMount() {
        $j(this.refs.wrapper).fadeIn(this.props.duration || 1000);
    }

    render() {
        return (
            <div ref="wrapper" style={{display: 'none'}}>
                {this.props.children}
            </div>
        );
    }
};