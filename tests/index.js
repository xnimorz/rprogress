import assert from 'assert';

import api from '../src/api/index';
import { PROGRESS_COMPLETE, PROGRESS_START, PROGRESS_STEP } from '../src/api/constants';

api.toggleAnimation(false);

describe('api.subscribe', () => {
    it('call callback function with type = progress', () => {
        const unsubscribe = api.subscribe((data) => {
            assert.equal(data.type, 'progress');
            unsubscribe();
        });

        api.start();
    });

    it('does not called callback twice if unsubscribe has been called', () => {
        var count = 0;
        const unsubscribe = api.subscribe((data) => {
            assert.equal(count++, 0);
            unsubscribe();

        });

        api.start();
        api.step();
    });
});

describe('api.start', () => {
    it('call function when start', (done) => {
        const unsubscribe = api.subscribe(() => {
            unsubscribe();
            done();
        });

        api.start();
    });

    it ('set up position up to 10%', done => {
        const unsubscribe = api.subscribe(event => {
            assert.ok(event.data.position <= 10);
            unsubscribe();
            done();
        });

        api.start();
    });

    it ('called with data.type === PROGRESS_START', done => {
        const unsubscribe = api.subscribe(event => {
            assert.equal(event.data.type, PROGRESS_START);
            unsubscribe();
            done();
        });

        api.start();
    });

});


describe('api.step', () => {
    it('increase position by 10%, when called without arguments', (done) => {
        var position = -1;
        const unsubscribe = api.subscribe(event => {
            if (position === -1) {
                position = event.data.position;
            } else {
                assert.equal(event.data.position, position + 10);
                unsubscribe();
                done();
            }
        });

        api.start();
        api.step();
    });

    it('set up positon if first argument sended', (done) => {
        api.start();
        const unsubscribe = api.subscribe(event => {
            assert.equal(event.data.position, 40);
            unsubscribe();
            done();
        });

        api.step(40);
    });

    it ('called with data.type === PROGRESS_STEP', done => {
        const unsubscribe = api.subscribe(event => {
            assert.equal(event.data.type, PROGRESS_STEP);
            unsubscribe();
            done();
        });

        api.step();
    });

    it('throw error if first argument more than 100', (done) => {
        api.start();

        try {
            api.step(140);
        } catch(e) {
            done();
        }

    });

});

describe('api.complete', () => {
    it('set up position === 100, when has been called', (done) => {
        const unsubscribe = api.subscribe(event => {
            assert.equal(event.data.position, 100);
            unsubscribe();
            done();
        });

        api.complete()
    });

    it ('called with data.type === PROGRESS_COMPLETE', done => {
        const unsubscribe = api.subscribe(event => {
            assert.equal(event.data.type, PROGRESS_COMPLETE);
            unsubscribe();
            done();
        });

        api.complete();
    });
});
