var React = require('react');
var Todo = require('../../src/Todo');

//var TestUtils = require('react/lib/ReactTestUtils.js');
var jsdom = require("jsdom");


describe('Todo', () =>  {
    return;
    it('should be true', () => {
        var component = TestUtils.renderIntoDocument(<Todo description="my tdo"/>);
        console.log(component);
    });
});