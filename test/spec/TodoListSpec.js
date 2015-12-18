var rewire = require('rewire');
var TodoList = rewire('../../src/TodoList');
var ReactHelpers = require('ReactHelpers');
var RS = require('../../src/RS');
var $j = require('jquery');

//global.text = {};

describe('TodoList Tests', () => {
    var $node;

    beforeEach(() => {
        $node = $j(ReactHelpers.render(<TodoList />));
        TodoList.__set__('Todo', TodoMock);
    });

    it('should show LOADING... if there are no todos', () => {
        expect($node.children().size()).toBe(2);
        expect($node.find(':contains(loading)').size()).toBeGreaterThan(0);

    });

    it('should show the proper number of todos', () => {
        RS.set('todos', [{id: 2, description: 'do that'}]);
        expect($node.find('todoProps').size()).toBe(1);

        RS.set('todos', RS.get('todos').concat([{id: 3, description: 'do something else'}]));
        expect($node.find('todoProps').size()).toBe(2);

        var props = $node.find('todoProps').map((i,n) => JSON.parse($j(n).html()));
        expect(props[0].description).toBe('do that');
        expect(props[1].description).toBe('do something else');
    });

    var TodoMock = props => <todoProps>{JSON.stringify(RS.get(props.rsKey))}</todoProps>
});
