import React from 'react';
import ReactDOM from 'react-dom';
import CenterLayout from './components/layouts/CenterLayout';
import Messenger from './containers/messenger';
import {CssCommon} from './components/layouts/CssCommon';

ReactDOM.render(
    <CenterLayout>
      <CssCommon/>
      <Messenger/>
    </CenterLayout>,
    document.getElementById('app')
);

module.hot.accept(); // eslint-disable-line