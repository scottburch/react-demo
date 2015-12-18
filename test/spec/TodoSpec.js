require('source-map-support').install()
var Todo = require('../../src/Todo');
var $j = require('jquery');

var ReactHelpers = require('../ReactHelpers');

var $todo;

describe('Todo Tests', () =>  {
    beforeEach(() => {
        RS.set('todos', [{id: 1, description:'my todo'}]);
        $todo = ReactHelpers.render(<Todo rsKey="todos.0"/>);
    });

    it('should contain the passed description', () => {
        expect($todo.find(':contains(my todo)').size()).toBeGreaterThan(0);
    });

    it('should mark the Todo completed if passed complete as a property',() => {
        expect($todo.find('span:contains(my todo)').parent().css('text-decoration')).toBe('none');
        RS.set('todos.0.complete', true);
        expect($todo.find('span:contains(my todo)').parent().css('text-decoration')).toBe('line-through');

    });
});
