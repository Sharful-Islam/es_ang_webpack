'use strict';

import * as aboutTpl from './about.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: aboutTpl,
      controller: require('./about.controller'),
      controllerAs: 'about'
    });

}

export default routeConfig;
