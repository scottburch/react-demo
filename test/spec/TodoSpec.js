require('source-map-support').install()
var Todo = require('../../src/Todo');

var RH = require('jasmine-testing/helpers/ReactHelpers');


describe('Todo Tests', () =>  {

    beforeEach(function() {
        RS.set('todos', [{id: 1, description:'my todo'}]);
        this.todo = RH.render(<Todo rsKey="todos.0"/>);
    });

    it('should contain the passed description', function() {
        expect(this.todo.find(':contains(my todo)').size()).toBeGreaterThan(0);
    });

    it('should mark the Todo completed if passed complete as a property', function() {
        expect(this.todo).not.toHaveClass('todo-complete');
        RS.set('todos.0.complete', true);
        expect(this.todo).toHaveClass('todo-complete');
    });
});
