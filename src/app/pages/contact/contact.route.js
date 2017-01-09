'use strict';

import * as contactTpl from './contact.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('contact', {
      url: '/contact',
      templateUrl: contactTpl,
      controller: require('./contact.controller'),
      controllerAs: 'contact'
    });

}

export default routeConfig;
