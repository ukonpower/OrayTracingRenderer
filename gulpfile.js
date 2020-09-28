const info = require('./info');
const gulp = require( 'gulp' );
const del = require( 'del' );
const browserSync = require( 'browser-sync' );
const typedoc = require( 'gulp-typedoc' );
const ts = require( 'gulp-typescript' );

const webpackStream = require( 'webpack-stream' );
const webpack = require( 'webpack' );

let distDir = './build';
let srcDir = './src';
let exampleDir = './examples'
let typesDir = './types'


function buildRollup( config, cb ) {
    
    rollup.rollup( config )
        .then( function( bundle ) {

            bundle.write( config.output )
            
        } )
        .then( function() {

            if ( cb ) cb();
            
        } )
        .catch( function( error ) {
            
            if ( cb ) cb();
            
            console.error( error );
            
        } );

}

function buildTypes( cb ) {

    var tsProjectDts = ts.createProject( './tsconfig.json' );
	var tsResult = gulp.src( srcDir + '/**/*.ts' )
        .pipe( tsProjectDts() );

    tsResult.dts.pipe( gulp.dest( typesDir ).on( 'end', cb ) );

}

function cleanBuildFiles( cb ){

    del([
        './build/',
        './docs/',
        './types/'
    ],{

        force: true,

    }).then( paths => {

        cb();

    });

}

function buildMinPackage( cb ){

	//module build
	const confModule = require( './webpack/build-min.config' );

	webpackStream( confModule, webpack )
        .pipe( gulp.dest( './build/' ) )
        .on( 'end', cb );

}

function buildESModulePackage( cb ){

	//module build
	const confModule = require( './webpack/build-module.config' );

	webpackStream( confModule, webpack )
        .pipe( gulp.dest( './build/' ) )
        .on( 'end', cb );
}

function buildDocs( cb ){

    gulp.src( srcDir )
        .pipe( typedoc({
            module: "umd",
            target: "es6",
            out: "./docs/",
            mode: "file",
            name: info.packageName,
    		moduleResolution: "node",
        }))
        .on( 'end', cb );

}

function brSync(){

    browserSync.init({
        server: {
            baseDir: './',
        },
        notify: false,
        ghostMode: false,
        open: 'external',
        startPath: exampleDir + '/index.html',
    });

}

function reload( cb ) {

    browserSync.reload();

    cb();
    
}

function watch(){

    gulp.watch( srcDir + '/**/*.ts', gulp.series( buildESModulePackage, reload ) );
    gulp.watch( exampleDir + '/**/*', reload );

}

let develop = gulp.series( 
    gulp.parallel( buildESModulePackage ),
    gulp.parallel( brSync, watch ),
);

exports.default = develop;
exports.build = gulp.series( cleanBuildFiles, buildMinPackage, buildESModulePackage, buildTypes,buildDocs, develop );
