var TodoService = require('../../src/TodoService');
var RS = require('../../src/RS');

describe('TodoService', function () {

    beforeEach(() => {
        spyOn(global, 'setTimeout').and.callFake(fn => fn());
    });

    describe('getTodos()', () => {
        it('should add dummy todos when first loaded', (done) => {
            TodoService.getTodos();
            expect(RS.get('todos').length).toBeGreaterThan(0);
            done();
        });
    });
});