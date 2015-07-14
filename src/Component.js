ReactComponent = require('react').Component;
_ = require('lodash');

module.exports = class Component extends ReactComponent {
    constructor() {
        wrapComponentWillMount.call(this);
        wrapComponentWillUnmount.call(this);
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
    this.mounted = true;
    var origComponentWillMount = this.componentWillMount || _.noop;
    this.componentWillMount = () => {
        origComponentWillMount.call(this);
        this.registerStoreKeys && doRegisterStoreKeys.call(this);
    }

    function doRegisterStoreKeys() {
        this.registerStoreKeys().map(key => {
            RS.autorun(() => {
                if(this.mounted) {
                    var newState = {};
                    newState[key] = RS.get(key);
                    this.setState(newState);
                }
            });
        })
    }
}
