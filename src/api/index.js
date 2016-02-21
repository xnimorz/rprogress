import E2 from 'e2';

import { PROGRESS_START, PROGRESS_STEP, PROGRESS_COMPLETE } from './constants';

var Events = new E2;
var position = 0;
var MAX_ANIMATE_SIZE = 93;
var MAX_UNCOMPLETED_SIZE = 95;
var animationEnabled = true;

var API = {
    start: () => {
        position = Math.trunc(Math.random() * 10) + 2;
        Events.emit('progress', {
            type:  PROGRESS_START,
            position: position
        });
        checkMaxPosition();
    },

    toggleAnimation: (enableAnimation) => {
        if (enableAnimation !== undefined) {
            animationEnabled = enableAnimation;
        } else {
            animationEnabled = !animationEnabled;
        }
        if (animationEnabled) {
            checkMaxPosition();
        }
    },

    complete: () => {
        position = 100;
        Events.emit('progress', {
            type: PROGRESS_COMPLETE,
            position: position
        });
        checkMaxPosition();
    },

    step: (to) => {
        if (arguments.length > 0 && to !== undefined) {
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
            type: PROGRESS_STEP,
            position: position
        });
        checkMaxPosition();
    },

    release: () => {
        position = 0;
    },

    subscribe: (callback) => {
        Events.on('progress', callback);
        return () => {
            Events.off('progress', callback);
        }
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

export default API;
