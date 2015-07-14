var ReactComponent = require('react').Component;
var _ = require('lodash');
var RS = require('./RS');
global.React = require('react');

module.exports = class Component extends ReactComponent {
    constructor() {
        wrapComponentWillMount.call(this);
        wrapComponentWillUnmount.call(this);
    }

    registerStoreKey(key, defaultValue) {
        var value = RS.get(key);
        value || RS.set(key, defaultValue);
        RS.autorun(() => {
            if(this.mounted) {
                var newState = {};
                newState[key] = RS.get(key);
                this.setState(newState);
            }
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
