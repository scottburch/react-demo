require('source-map-support').install()
var Todo = require('../../src/Todo');
var $j = require('jquery');

var ReactHelpers = require('../ReactHelpers');

var $todo;

describe('Todo Tests', () =>  {
    beforeEach(() => {
        RS.set('todos', [{description:'my todo'}]);
        $todo = ReactHelpers.render(<Todo rsKey="todos"/>);
    });

    it('should contain the passed description', () => {
        expect($todo.find(':contains("my todo")').size()).toBeGreaterThan(0);
    });

    it('should mark the Todo completed if passed complete as a property',() => {
        var node = ReactHelpers.render(<Todo rsKey="todos" description="my todo" complete={true}/>);
        expect($j('div', node).css('text-decoration')).toBe('line-through');
    });
});
