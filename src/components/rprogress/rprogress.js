import React, { Component } from 'react';

import API from '../../api';
import Overlay from '../overlay/overlay';
import { PROGRESS_COMPLETE } from '../../api/constants';
import transitionEndEvent from '../../utils/whichTransitionEndEvent';
import subscribe from 'subscribe-event';

import styles from './rprogress-styles';

const CYCLE_TYPE = 'cycle';
const CYCLE_PERCENTS = 25;
const TIMEOUT_DELAY_FOR_ANIMATIONS = 500;

class RProgress extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            progress: 0,
            active: false
        };        

        this.getReference = (progress) => {
            this.progress = progress;
        }
    }

    componentDidMount() {        
        API.subscribe((event) => {
            const { data } = event;  
            let unsubscribe;
            let timeout;
            
            const hideProgress = () => {
                unsubscribe();
                clearTimeout(timeout);
                
                this.setState({
                    progress: 0,
                    active: false
                });
            };

            this.setState({
                progress: data.position,
                active: true
            });

            if (data.type === PROGRESS_COMPLETE) {

                if (this.progress && this.props.type !== CYCLE_TYPE) {
                    unsubscribe = subscribe(this.progress, transitionEndEvent, hideProgress);
                    // Run timeout in case transitionEndEvent failed for some reasons
                    timeout = setTimeout(hideProgress, TIMEOUT_DELAY_FOR_ANIMATIONS)
                } else {
                    this.setState({
                        progress: 0,
                        active: false
                    });
                }
            }
        });
    }

    render() {
        const { progress, active } = this.state;
        const { className, type, color } = this.props;

        if (!progress) {
            return null;
        }

        let percents = progress;
        let cycleClass;
        if (type === CYCLE_TYPE) {
            percents = CYCLE_PERCENTS;
            cycleClass = 'rprogress_cycle'
        }

        let stylesObj = {
            width: `${percents}%`
        };
        if (color) {
            stylesObj.backgroundColor = color;
        }
        const classes = `${styles.rprogress || 'rprogress'} ${cycleClass ? styles[cycleClass] || cycleClass : ''} ${className || ''}`;

        return (
            <Overlay visible={active}>
                <div className={classes}
                     style={stylesObj}
                     ref={this.getReference}> </div>
            </Overlay>
        );
    }
}

export default RProgress;
