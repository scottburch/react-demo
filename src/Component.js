var ReactComponent = require('react').Component;
var _ = require('lodash');
var RS = require('./RS');
global.React = require('react');

module.exports = class Component extends ReactComponent {
    constructor() {
        super();
        wrapComponentWillMount.call(this);
        wrapComponentWillUnmount.call(this);
    }

    autorun(fn) {
        RS.autorun(() => this.mounted !== false && fn());
    }

    registerStoreKey(key, defaultValue) {
        var value = RS.get(key);
        value || RS.set(key, defaultValue);

        this.autorun(() => {
                var newState = {};
                newState[key] = RS.get(key);
                this.setState(newState);
        });
    }
};

function wrapComponentWillUnmount() {
    var origComponentWillUnmount = this.componentWillUnmount || _.noop;
    this.componentWillUnmount = () => {
        this.mounted = false;
        origComponentWillUnmount.call(this);
    }
}

function wrapComponentWillMount() {
    var origComponentWillMount = this.componentWillMount || _.noop;
    this.componentWillMount = () => {
        this.mounted = true;
        origComponentWillMount.call(this);
    }
}
