import React from 'react';
import ReactDOM from 'react-dom';
import Flats from './components/flat_list';
import flats from '../data/flats';

import '../assets/stylesheets/application.scss';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Flats flats={flats} />, root);
}
