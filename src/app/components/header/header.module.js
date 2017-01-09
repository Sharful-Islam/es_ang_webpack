'use strict';

import * as headerDirective from './header.directive';
import './header.scss';

const headerModule = angular.module('header-module', []);

headerModule
  .directive('headerTest', headerDirective);

export default headerModule;
