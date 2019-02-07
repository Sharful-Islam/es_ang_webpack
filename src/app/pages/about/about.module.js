'use strict';

//import './about.scss';

import * as route from './about.route';
import * as aboutController from './about.controller.js';

const aboutPageModule = angular.module('about-module', [
  'ui.router'
]);

aboutPageModule
    .config(route);

export default aboutPageModule;
