'use strict';


import * as _ from 'lodash/core';
import * as moment from 'moment';


function ContactController($log) {

  'ngInject';

  $log.debug('Hello from contact  controller!');


	this.lodash_version = _.VERSION;
	this.moment_version = moment.version;
	this.content = {
		title : 'Contact Us',
		links : [
			{ name : 'Beach body coach', sref : 'main', url: 'http://beach'},
			{ name : 'Async', sref : 'async', url: ''},
			{ name : 'About', sref : 'about', url: ''},
		],
		lede : 'About Esho Bangla Shikhi',
		body : 'Esho Bangla Shikhi is a not-for profit organization comprised of various member levels that support the education, content creation and/or donations supporting the same cause.'		
	}

}

export default ContactController;
