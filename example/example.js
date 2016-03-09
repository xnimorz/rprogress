import React, { Component } from 'react';
import { render } from 'react-dom';

import {RProgress, RProgressApi } from '../lib/index';

var inputRef;

render(
    <div className='content'>
        <a href="https://github.com/xnimorz/rprogress" className='icon'></a><h1>RProgress.js</h1>
        <p>Simple react progress bar library. It's helpful to create Ajax-heavy apps.</p>
        <p>Library use React component and API to manage progress bar</p>
        <div className='item'><button onClick={() => RProgressApi.start()}>RProgressApi.start()</button> - show RProgress</div>
        <div className='item'><button onClick={() => RProgressApi.step()}>RProgressApi.step()</button> - increment about 10% to progress bar</div>
        <div className='item'><button onClick={() => {
            RProgressApi.step(parseInt(inputRef.value, 10) || 50)}
        }>RProgressApi.step(input.value || 50)</button>{' - '}<input ref={(elem) => inputRef = elem} type='text'/> - set progress directly</div>
        <div className='item'><button onClick={() => RProgressApi.complete()}>RProgressApi.complete()</button> - complete progress bar</div>
        <div className='item'><button onClick={() => RProgressApi.subscribe(data => (console.log(data)))}>RProgressApi.subscribe(data => (console.log(data)))</button> - subscribe to progress bar changes</div>
        <div className='item'><button onClick={() => RProgressApi.toggleAnimation()}>RProgressApi.toggleAnimation()</button> - toggle auto-progress</div>
        <div className='item'>
            Fork me on <a href="https://github.com/xnimorz/rprogress">GitHub</a>.
        </div>
        <RProgress />
    </div>
, document.getElementById('app'));
