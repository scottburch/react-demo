require('source-map-support').install()
var Todo = require('../../src/Todo');
var $j = require('jquery');

ReactHelpers = require('../ReactHelpers');


describe('Todo Tests', () =>  {

    it('should contain the passed description', () => {
        var node = ReactHelpers.render(<Todo description="my todo"/>);
        expect($j(':contains("my todo")', node).size()).toBeGreaterThan(0);
    });

    it('should mark the Todo completed if passed complete as a property',() => {
        var node = ReactHelpers.render(<Todo description="my todo" complete={true}/>);
        expect($j(node).css('text-decoration')).toBe('line-through');
    });
});