require('source-map-support').install()
var TodoList = require('../../src/TodoList');
ReactHelpers = require('../ReactHelpers');
RS = require('../../src/RS');
$j = require('jquery');

describe('TodoList Tests', () => {

    it('should show a list of todos', function() {
        var node = $j(ReactHelpers.render(<TodoList />));
        expect(node.children().size()).toBe(0);

        RS.set('todos', [{id: 2, description: 'do that'}]);
        expect(node.children().size()).toBe(1);

        RS.set('todos', RS.get('todos').concat([{id: 3, description: 'do something else'}]));
        expect(node.children().size()).toBe(2);
    });

});