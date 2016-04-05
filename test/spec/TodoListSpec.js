var rewire = require('rewire');
var TodoList = rewire('../../src/TodoList');
var RH = require('jasmine-testing/helpers/ReactHelpers');
var RS = require('RS');

describe('TodoList Tests', () => {

    beforeEach(function() {
        this.node = $j(RH.render(<TodoList />));
        TodoList.__set__('Todo', TodoMock);
    });

    it('should show LOADING... if there are no todos', function() {
        expect(this.node.find(':contains(loading)').size()).toBeGreaterThan(0);
    });

    it('should show the proper number of todos', function() {
        RS.set('todos', [{id: 2, description: 'do that'}]);
        expect(this.node.find('todoMock').size()).toBe(1);

        RS.set('todos', RS.get('todos').concat([{id: 3, description: 'do something else'}]));
        expect(this.node.find('todoMock').size()).toBe(2);

        expect(this.node.find('todoMock:contains(todos.0)').size()).toBe(1);
        expect(this.node.find('todoMock:contains(todos.1)').size()).toBe(1);
    });

    var TodoMock = ({rsKey}) => <todoMock>${rsKey}</todoMock>
});
