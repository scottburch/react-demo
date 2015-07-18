var TodoService = require('../../src/TodoService');
var RS = require('../../src/RS');

describe('TodoService', function() {

    beforeEach(function() {
    });

    it('should add dummy todos when first loaded', (done) => {
        TodoService.getTodos();
        setTimeout(() => {
            expect(RS.get('todos').length).toBeGreaterThan(0);
            done();
        }, 2500);
    });
});