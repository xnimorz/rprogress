export default (function whichTransitionEndEvent() {
    const fakeElement = document.createElement('dummyNode');

    const animations = {
        /* Firstly WebkitAnimation because android 4.x return true on all checks */
        WebkitTransition: 'webkitTransitionEnd',
        transition: 'transitionend',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend'
    };

    for (var animation in animations) {
        if (fakeElement.style[animation] !== undefined){
            return animations[animation];
        }
    }

    return null;
})();
