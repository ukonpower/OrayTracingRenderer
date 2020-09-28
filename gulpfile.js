const info = require('./info');
const gulp = require( 'gulp' );
const del = require( 'del' );
const browserSync = require( 'browser-sync' );
const typedoc = require( 'gulp-typedoc' );
const ts = require( 'gulp-typescript' );
const rollup = require("rollup");
const jest = require('jest-cli');

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

function buildUMDPackage( cb ){

    let config = require("./rollup.config");

    config.output.format = 'umd';
    config.output.file = distDir + '/' + info.packageFileName + '.js';
    
    buildRollup( config, cb );

}

function buildESModulePackage( cb ){

    let config = require("./rollup.config");

    config.output.format = 'esm';
    config.output.file = distDir + '/' + info.packageFileName + '.module.js';
    
    buildRollup( config, cb );

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

function test( cb ) {

    jest.run().then( cb() );

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
exports.test = test;
exports.build = gulp.series( cleanBuildFiles, buildUMDPackage, buildTypes,buildDocs, develop );
