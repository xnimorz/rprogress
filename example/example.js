import React, { Component } from 'react';

import { RProgress, RProgressAPI } from '../lib/rprogress.js';

var inputRef;

React.render(
    <div>
        <h1>RProgress.js</h1>
        <p>Simple react progress bar library. It's helpful to create Ajax-heavy apps.</p>
        <p>Library use React component and API to manage progress bar</p>
        <div><button onClick={() => RProgressAPI.start()}>RProgressAPI.start()</button></div> - show RProgress
        <div><button onClick={() => RProgressAPI.step()}>RProgressAPI.step()</button></div> - increment about 10% to progress bar
        <div><button onClick={() => {
            RProgressAPI.step(parseInt(inputRef.value, 10) || 50)}
        }>RProgressAPI.step(input.value || 50)</button>{' - '}<input refs={(elem) => inputRef = elem} type='text'/></div> - set progress directly
        <div><button onClick={() => RProgressAPI.complete()}>RProgressAPI.complete()</button></div> - complete progress bar
        <div><button onClick={() => RProgressAPI.subscribe(data => (console.log(data)))}>RProgressAPI.subscribe(data => (console.log(data)))</button></div> - subscribe to progress bar changes
        <RProgress />
    </div>
, document.getElementById('app'));
