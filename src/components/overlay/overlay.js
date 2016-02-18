import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './overlay-styles';

class Overlay extends Component {
    componentDidMount () {
        this.body = document.body;
        this.node = document.createElement('div');
        this.body.appendChild(this.node);
        this.handleRender();
    }

    componentDidUpdate () {
        this.handleRender();
    }

    componentWillUnmount () {
        ReactDOM.unmountComponentAtNode(this.node);
        this.body.removeChild(this.node);
    }

    handleRender() {
        const { children, visible } = this.props;

        ReactDOM.render(
            (
                <div className={`${styles.overlay} ${visible ? styles.overlay_active : ''}`}>
                    {children}
                </div>
            ),
            this.node
        );
    }

    render() {
        return React.DOM.noscript();
    }
}

export default Overlay;
