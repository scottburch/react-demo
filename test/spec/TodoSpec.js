require('source-map-support').install()
var Todo = require('../../src/Todo');

var RH = require('jasmine-testing/helpers/ReactHelpers');

var $todo;

describe('Todo Tests', () =>  {
    beforeEach(() => {
        RS.set('todos', [{id: 1, description:'my todo'}]);
        $todo = RH.render(<Todo rsKey="todos.0"/>);
    });

    it('should contain the passed description', () => {
        expect($todo.find(':contains(my todo)').size()).toBeGreaterThan(0);
    });

    it('should mark the Todo completed if passed complete as a property',() => {
        expect($todo).not.toHaveClass('todo-complete');
        RS.set('todos.0.complete', true);
        expect($todo).toHaveClass('todo-complete');

    });
});
