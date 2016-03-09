'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _arguments = arguments;

var _e = require('e2');

var _e2 = _interopRequireDefault(_e);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Events = new _e2.default();
var position = 0;
var MAX_ANIMATE_SIZE = 93;
var MAX_UNCOMPLETED_SIZE = 95;
var animationEnabled = true;

var API = {
    start: function start() {
        position = Math.floor(Math.random() * 10) + 2;
        Events.emit('progress', {
            type: _constants.PROGRESS_START,
            position: position
        });
        checkMaxPosition();
    },

    toggleAnimation: function toggleAnimation(enableAnimation) {
        if (enableAnimation !== undefined) {
            animationEnabled = enableAnimation;
        } else {
            animationEnabled = !animationEnabled;
        }
        if (animationEnabled) {
            checkMaxPosition();
        }
    },

    complete: function complete() {
        position = 100;
        Events.emit('progress', {
            type: _constants.PROGRESS_COMPLETE,
            position: position
        });
        checkMaxPosition();
    },

    step: function step(to) {
        if (_arguments.length > 0 && to !== undefined) {
            if (to > 100) {
                throw new Error('Maximum progress size is 100. You can not set progress value bigger than 100');
            }
            position = to;
        } else {
            position += 10;
        }

        if (position >= 100) {
            position = MAX_UNCOMPLETED_SIZE;
        }

        Events.emit('progress', {
            type: _constants.PROGRESS_STEP,
            position: position
        });
        checkMaxPosition();
    },

    release: function release() {
        position = 0;
    },

    subscribe: function subscribe(callback) {
        Events.on('progress', callback);
        return function () {
            Events.off('progress', callback);
        };
    }
};

function animate() {
    if (position < MAX_ANIMATE_SIZE && animationEnabled) {
        var delta = Math.random() * 2;
        API.step(position + delta);
    }
}

function checkMaxPosition() {
    if (position < MAX_ANIMATE_SIZE) {
        setTimeout(animate, 500);
    }
}

exports.default = API;