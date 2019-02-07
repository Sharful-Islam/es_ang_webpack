'use strict';

import ValidationTests from './directives/validation-test/validation-test.directive';
import Constants from './services/constants';
import Store from './services/store.factory';
import ResolveProvider from './services/resolver.provider';

const shared = angular.module('core.shared', [
		Constants,
		Store,
		ResolveProvider,
		ValidationTests
	]);
/*

require('./directives/validation-test/validation-test.directive')(shared);

require('./services/constants')(shared);
require('./services/store.factory')(shared);
require('./services/resolver.provider')(shared);
*/
export default shared;
