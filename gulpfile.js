const info = require( './info' );
const gulp = require( 'gulp' );
const del = require( 'del' );
const browserSync = require( 'browser-sync' );

const typedoc = require( 'gulp-typedoc' );
const ts = require( 'gulp-typescript' );

const webpackStream = require( 'webpack-stream' );
const webpack = require( 'webpack' );

const jest = require( 'jest-cli' );


let distDir = './build';
let srcDir = './src';
let typesDir = './types';
let docsDir = './gh-pages/docs'
let exampleDir = './gh-pages/examples';

function buildTypes( cb ) {

	var tsProjectDts = ts.createProject( './config/typescript/types.tsconfig.json' );
	var tsResult = gulp.src( srcDir + '/**/*.ts' )
		.pipe( tsProjectDts() );

	tsResult.dts.pipe( gulp.dest( typesDir ).on( 'end', cb ) );

}

function cleanBuildFiles( cb ) {

	del( [
		distDir,
		docsDir,
		typesDir
	], {

		force: true,

	} ).then( paths => {

		cb();

	} );

}

function umdBuildProduction( cb ) {

	webpackStream( require( "./config/webpack/umd-min.webpack.config" ), webpack ).on( 'error', function ( e ) { this.emit( 'end' ); } )
		.pipe( gulp.dest( distDir ) )
		.unpipe( browserSync.reload() )
		.on('end', cb );

}

function umdBuildDevelopment( cb ) {
	
	return webpackStream( require( "./config/webpack/umd.webpack.config" ), webpack ).on( 'error', function ( e ) { this.emit( 'end' ); } )
		.pipe( gulp.dest( distDir ) )
		.unpipe( browserSync.reload() )
		.on('end', cb );

}

function buildDocs( cb ) {

	gulp.src( srcDir )
		.pipe( typedoc( {
			module: "umd",
			target: "es6",
			out: docsDir,
			mode: "file",
			name: info.packageName,
    		moduleResolution: "node",
		} ) )
		.on( 'end', cb );

}

function brSync() {

	browserSync.init( {
		server: {
			baseDir: './',
		},
		notify: false,
		ghostMode: false,
		open: 'external',
		startPath: exampleDir,
	} );

}

function reload( cb ) {

	browserSync.reload();

	cb();

}

function watch() {

	gulp.watch( srcDir + '/**/*', gulp.series( umdBuildDevelopment ) );
	gulp.watch( exampleDir + '/**/*', gulp.series( reload ) );

}

let develop = gulp.series(
	umdBuildDevelopment,
	gulp.parallel( brSync, watch ),
);

exports.default = develop;
exports.build = gulp.series( cleanBuildFiles, umdBuildProduction, umdBuildDevelopment, buildTypes, buildDocs, develop );

