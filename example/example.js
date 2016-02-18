import React, { Component } from 'react';
import { render } from 'react-dom';

import { RProgress, RProgressApi } from '../src/index';

var inputRef;

console.log(RProgress);
console.log(RProgressApi);

render(
    <div>
        <h1>RProgress.js</h1>
        <p>Simple react progress bar library. It's helpful to create Ajax-heavy apps.</p>
        <p>Library use React component and API to manage progress bar</p>
        <div><button onClick={() => RProgressApi.start()}>RProgressApi.start()</button></div> - show RProgress
        <div><button onClick={() => RProgressApi.step()}>RProgressApi.step()</button></div> - increment about 10% to progress bar
        <div><button onClick={() => {
            RProgressApi.step(parseInt(inputRef.value, 10) || 50)}
        }>RProgressApi.step(input.value || 50)</button>{' - '}<input refs={(elem) => inputRef = elem} type='text'/></div> - set progress directly
        <div><button onClick={() => RProgressApi.complete()}>RProgressApi.complete()</button></div> - complete progress bar
        <div><button onClick={() => RProgressApi.subscribe(data => (console.log(data)))}>RProgressApi.subscribe(data => (console.log(data)))</button></div> - subscribe to progress bar changes
        <RProgress />
    </div>
, document.getElementById('app'));
