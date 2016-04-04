var TodoService = require('../../src/TodoService');
var RS = require('../../src/RS');

describe('TodoService', function () {

    beforeEach(() => {
        RS.set('todos', []);
        spyOn(global, 'setTimeout').and.callFake(fn => fn());
    });

    describe('getTodos()', () => {
        it('should add dummy todos when first loaded after some time', () => {
            TodoService.getTodos();
            expect(RS.get('todos').length).toBeGreaterThan(0);
        });
    });

    describe('addTodo()', () => {
        it('should add a todo given a description and assign an ID', () => {
            TodoService.addTodo({description: 'me'});
            expect(RS.get('todos.0')).toEqual({description: 'me', id: jasmine.any(String)});
        });

        it('should be able to add multiple todos', () => {
            var descriptions = ['one','two','three'];
            generateTodos(descriptions);
            descriptions.forEach(checkTodo);

            function checkTodo(desc, idx) {
                expect(RS.get(`todos.${idx}`)).toEqual({description: desc, id: jasmine.any(String)});
            }
        });
    });

    describe('deleteTodo()', () => {
        it('should delete a todo with a given ID', () => {
            var ids = generateTodos(['one','two','three']).map(R.prop('id'));
            expect(ids.length).toBe(3);
            ids.forEach((id, idx) => {
                TodoService.deleteTodo(id);
                expect(RS.get('todos').map(R.prop('id'))).not.toContain(id);
            });
        });
    });
});

function generateTodos(descriptions) {
    descriptions.forEach(desc => TodoService.addTodo({description: desc}));
    return RS.get('todos');
}


