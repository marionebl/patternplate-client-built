#!/usr/bin/env node --harmony
require('babel-core/polyfill');
var minimist = require( 'minimist' );

var start = require( './_patternplate-client' );
var args = minimist( process.argv.slice( 1 ) );

start( args )
	.then( function startCompleted ( application ) {
		application.log.info( '[application]', 'Started server ...' );
	} )
	.catch( function startFailed ( err, application ) {
		var log = application ? application.log || console : console;

		log.trace( err );
	} );
