# RProgress.js

RProgress is react ajax loader progress bar with clear API.

It's helpful to create Ajax-heavy apps.
Library use API to manage progress bar.


Example: http://xnimorz.github.io/rprogress/

### Install:

```
npm install --save rprogress
```

### Usage

There are several ways to use rprogress.js :

##### №1) use webpack bundle

```
import { RProgress, RProgressApi } from 'rprogress';
```

Then you need to add css-loader to your webpack config file.

For example:
```
 {
     test: /\.css$/,
     loader: ExtractTextPlugin.extract(
         'style',
         'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
     )
 }
```

##### №2) use source code

```
import { RProgress, RProgressAPI } from 'rprogress/src';
```

Then you need to add babel-loader for javascript code and css-loader with css-modules for styles to your webpack config file.

Such as:

```
module: {
        loaders: [
            { test: /\.jsx?$/, loader: "babel-loader"},
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    'postcss-loader'
                )
            }
        ]
    }
```

Also you can open [webpack.example.js](https://github.com/xnimorz/rprogress/blob/master/webpack.example.js) or [webpack.config.js](https://github.com/xnimorz/rprogress/blob/master/webpack.config.js) to check webpack configs.

### API

```
RProgressApi.start() - show progress. Progress position will be from 0 to 12%

RProgressApi.step() - increase progress position by 10%

RProgressApi.step(to) - set up progress position to to%

RProgressApi.complete() - set up progress position to 100% and close progress when animation is over

RProgressApi.release() - set up progress position to 0

RProgressApi.subscribe(callback) - call callback-function after any progress position changes

RProgressApi.toggleAnimation(animationEnableFlag) - turn off\on auto-progress
```

### Auto-progress

Progress bar indicate working and after every 500ms animate himself. In this case progress bar position increase up to 2%
You can turn off auto-progress call ```RProgressApi.toggleAnimation(false)```

### Customize

You can customize component by setting className:

```
import { RProgress } from 'rprogress';

import 'rpogress/lib/rprogress-styles.css';
import 'myStylesClass.css';

React.render(<RProgress className='myStylesClass' />);
```

