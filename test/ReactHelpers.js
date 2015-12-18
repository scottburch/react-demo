var React = require('react');
var ReactDom = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils.js');
var $j = require('jquery');

global.$j = $j;

var nodes = [];

module.exports = {
    render: (component) => {
        var c = TestUtils.renderIntoDocument(component);
        c = c || TestUtils.renderIntoDocument(statelessWrapper(component));
        var n = ReactDom.findDOMNode(c);
        nodes.push(n);
        var $n = $j(n)
        $n.component = c;
        return $n;
    },
    Simulate: TestUtils.Simulate
};

afterEach(() => {
    nodes.forEach(n => {
        var container = $j(n).parent().get(0);
        container && ReactDom.unmountComponentAtNode(container);
    });
    nodes = [];
});

function statelessWrapper(component) {
    var Wrapper = React.createClass({
        render: () => component
    });
    return <Wrapper/>
}
