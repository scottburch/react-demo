require('source-map-support').install()
var TodoList = require('../../src/TodoList');
var Component = require('../../src/Component');
ReactHelpers = require('../ReactHelpers');
RS = require('../../src/RS');
$j = require('jquery');

text = {
}

describe('TodoList Tests', () => {

    beforeEach(() => {
        TodoList.__set__('Todo', TodoMock);
    });

    it('should show LOADING... if there are no todos', () => {
        var node = $j(ReactHelpers.render(<TodoList />));
        expect(node.children().size()).toBe(2);
        expect(node.find(':contains(LOADING)').size()).toBeGreaterThan(0);

        RS.set('todos', [{id: 2, description: 'do that'}]);
        expect(node.children().size()).toBe(2);

        RS.set('todos', RS.get('todos').concat([{id: 3, description: 'do something else'}]));
        expect(node.children().size()).toBe(3);

        var props = node.find('todoProps').map((i,n) => JSON.parse($j(n).html()));
        expect(props[0].description).toBe('do that');
        expect(props[1].description).toBe('do something else');
    });


    var TodoMock = class TodoMock extends Component {
      render() {
          return <todoProps>{JSON.stringify(this.props)}</todoProps>
      }
    };
});
