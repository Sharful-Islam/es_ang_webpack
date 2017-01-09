'use strict';

import headerTpl from './header.html';

function headerComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: headerTpl,
    controller: HeaderController,
    controllerAs: 'header',
    bindToController: true
  };

  return directive;

  function HeaderController () {
    'vm';
    $log.debug('Hello from header controller!');
    //$log.debug(vm);
    _.extend(this,{
      nav :[{
        id : 0,
        name : 'main',
        title : 'Coach Lina Jules',
        icon : 'glyphicon glyphicon-home'
      },{
        id : 1,
        name : 'about',
        title : 'About',
        icon : 'glyphicon glyphicon-about-me'
      },{
        id : 2,
        name : 'contact',
        title : 'Contact',
        icon : 'glyphicon glyphicon-email'
      }]
    })
  }

}

export default headerComponent;
