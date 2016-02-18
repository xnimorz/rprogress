import React, { Component } from 'react';

import API from '../../api';
import Overlay from '../overlay/overlay';

import styles from './rprogress-styles';

class RProgress extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            progress: 0,
            active: false
        };

        API.subscribe((data) => {
            this.setState({
                progress: data.progress
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
                <div className={`${styles.rprogress} ${className || ''}`}
                     style={`width: ${progress}%`}></div>
            </Overlay>
        );
    }
}

export default RProgress;
