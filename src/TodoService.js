var RS = require('./RS');
var todosLoaded = false;
var nextId = new Date().getTime();
var TODO_LOAD_DELAY = 2000;

RS.set('todos', []);

module.exports =  {
    getTodos() {
        todosLoaded || setTimeout(() => (RS.get('todos') && RS.get('todos').length > 0) || RS.set('todos', [{id:1, description: 'Do something'}, {id:2, description: 'Do something else'}]), TODO_LOAD_DELAY);
        todosLoaded = true;
        return RS.get('todos');
    },

    getIncompleteTodos() {
        return RS.get('todos').filter(todo => todo.complete !== true);
    },

    addTodo(data) {
        var tempId = nextId++;
        var idx = RS.get('todos').length;
        RS.set(`todos.${idx}`,_.extend(data, {tempId: tempId}));
        setTimeout(() => RS.set(`todos.${idx}.id`, tempId), 2000);
    },
    deleteTodo(id) {
        RS.set('todos', RS.get('todos').filter(todo => todo.id !== id));
    },

//    toggleTodoComplete(id) {
  //      RS.get('todos').forEach((todo, idx) => todo.id === id && RS.set(`todos.${idx}`, _.extend(todo, {complete: !todo.complete})));
    //}
};