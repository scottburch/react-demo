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
        expect(this.node.find('todoProps').size()).toBe(1);

        RS.set('todos', RS.get('todos').concat([{id: 3, description: 'do something else'}]));
        expect(this.node.find('todoProps').size()).toBe(2);

        var props = this.node.find('todoProps').map((i,n) => JSON.parse($j(n).html()));
        expect(props[0].description).toBe('do that');
        expect(props[1].description).toBe('do something else');
    });

    var TodoMock = props => <todoProps>{JSON.stringify(RS.get(props.rsKey))}</todoProps>
});
