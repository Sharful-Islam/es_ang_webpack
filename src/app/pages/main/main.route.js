'use strict';

import * as mainTpl from './main.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: mainTpl,
      controller: require('./main.controller'),
      controllerAs: 'main'
    });

}

export default routeConfig;
