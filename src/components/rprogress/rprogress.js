import React, { Component } from 'react';

import API from '../../api';
import Overlay from '../overlay/overlay';
import { PROGRESS_COMPLETE } from '../../api/constants';
import transitionEndEvent from '../../utils/whichTransitionEndEvent';

import styles from './rprogress-styles';

class RProgress extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            progress: 0,
            active: false
        };

        API.subscribe((event) => {
            const { data } = event;
            if (data.type === PROGRESS_COMPLETE) {
                this.progress.addEventListener(transitionEndEvent, () => {
                    this.setState({
                        progress: 0,
                        active: false
                    });
                });
            }

            this.setState({
                progress: data.position,
                active: true
            });
        });
    }

    render() {
        const { progress, active } = this.state;
        const { className } = this.props;

        if (!progress) {
            return React.DOM.noscript();
        }

        return (
            <Overlay visible={active}>
                <div className={`${styles.rprogress || 'rprogress'} ${className || ''}`}
                     style={{width: progress + '%'}}
                     ref={progress => this.progress = progress}> </div>
            </Overlay>
        );
    }
}

export default RProgress;
