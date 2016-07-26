var actions = require('./RSActions');

module.exports = global.RS = global.RS || require('reactive-store')();

RS.get = _.wrap(RS.get, storeGet);

function storeGet(fn, what) {
    actions[what] && actions[what]();
    return fn(what);
}

