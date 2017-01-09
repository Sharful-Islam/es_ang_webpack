'use strict';

import './contact.scss';

import * as route from './contact.route';

const contactPageModule = angular.module('contact-module', [
  'ui.router'
]);

contactPageModule
    .config(route);

export default contactPageModule;
