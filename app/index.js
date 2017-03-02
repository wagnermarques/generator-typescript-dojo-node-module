'use strict';

//http://jessefreeman.com/dev-techniques/automating-typescript-with-node-and-grunt/
//https://github.com/gruntjs/grunt-contrib-watch
//https://github.com/jprichardson/node-fs-extra

//https://dzone.com/articles/understanding-execfile-spawn-exec-and-fork-in-node

//https://udgwebdev.com/node-js-para-leigos-child-process/
//http://www.eguneys.com/blog/2014/09/17/lets-build-a-yeoman-generator-2
//https://github.com/SBoudrias/gruntfile-editor
//http://yeoman.io/authoring/file-system.html

//https://www.npmjs.com/package/fs-extra-promise
//https://www.npmjs.com/browse/keyword/child_process

//https://c9.io/basarat/grunt-ts
//https://www.npmjs.com/package/typings
//http://geeklearning.io/grunt-configuration-for-your-nodejs-server-in-typescript/

const fs = require('file-system');
var exec = require('child_process').exec
var mkdirp = require('mkdirp');
var util = require('util');
var path = require('path');
var yosay = require('yosay');
var chalk = require('chalk');
var Generator = require('yeoman-generator');
var glob = require('glob');
var GruntfileEditor = require('gruntfile-editor');
var editor = new GruntfileEditor();


module.exports = class extends Generator {


    constructor(args, opts) {
	console.log("constructor(args, opts) {..");        
	super(args, opts);
        
        
        this.option('module_name');
        this.option('module_description');

        this._tblVars = {};
	this._tblVars.jsonPkgName = path.basename(process.cwd());
        this._tblVars.jsonPkgDescription = path.basename(process.cwd());

    }
 
    
    //http://yeoman.io/authoring/running-context.html
    //If the method name doesn't match a priority, it is pushed in the default group.
    priorityName() {}
    
    method1() {
	//console.log('method 1 just ran');
    }

    //this is a prototype method. This is called in sequence automatically
    method2() {
	//console.log('method 2 just ran');
        //runs befor default
    }

    
    //_private_method nao he chamado automaticamente
    //this.method metodo de instancia tambem nnao
    //to understand this:http://yeoman.io/authoring/running-context.html
    
    //The available priorities are (in running order):

    //    initializing - Your initialization methods (checking current project state, getting configs, etc)
    //    prompting - Where you prompt users for options (where you'd call this.prompt())
    //    configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
    //    default - If the method name doesn't match a priority, it will be pushed to this group.
    //    writing - Where you write the generator specific files (routes, controllers, etc)
    //    conflicts - Where conflicts are handled (used internally)
    //    install - Where installation are run (npm, bower)
    //    end - Called last, cleanup, say good bye, etc
    
    initializing(){
        this.log(yosay(
            'Hi, thanks to try this yo generator." \n Lets generate \n your typescript-node-module named \n ' + chalk.red(this._tblVars.jsonPkgName) + '.'
        ));
        this.log("this is yours template variables \n");
        console.log(this._tblVars);
        this.log("\n");
	
	//https://theintern.github.io/intern/#directory-structure
	mkdirp('dist');
	mkdirp('node_modules');
	mkdirp('src');
	mkdirp('tests');
	mkdirp('tests/functional');
	mkdirp('tests/support');
	mkdirp('tests/unit');	
    }
    
    default(){
	//console.log("default(){...");
    }
    
    prompting(){
	//noprompting
        //not cools for scriptings
    }
    
    configuring(){
	//console.log("configuring(){...");
    }
    
    
    writing(){
	//console.log("writing(){...");
        
        this.log("----------\n");
        this.log("Lets template some files...");
	this.fs.copyTpl(
	    this.templatePath('_package.json'),
	    this.destinationPath('package.json'), this._tblVars);
        
        
	this.fs.copyTpl(
	    this.templatePath('_Gruntfile.js'),
	    this.destinationPath('Gruntfile.js'),
            {}
	);

	this.fs.copyTpl(
	    this.templatePath('_tsconfig.json'),
	    this.destinationPath('tsconfig.json'),
            {}
	);

	this.fs.copyTpl(
	    this.templatePath('src/_index.ts'),
	    this.destinationPath('src/index.ts'),
	    {}
	);

	this.fs.copyTpl(
	    this.templatePath('src/model/github-project-hupdate-domain-model.ts'),
	    this.destinationPath('src/model/github-project-hupdate-domain-model.ts'),
	    {}
        );

        this.fs.copyTpl(
	    this.templatePath('src/_amd_foo_module.js'),
	    this.destinationPath('src/amd_foo_module.js'),
	    {}            
	);

        this.fs.copyTpl(
	    this.templatePath('src/_main.js'),
	    this.destinationPath('src/main.js'),
	    {}            
	);
        
	//editor.insertConfig('compass', '{ foo: "bar" }');
	//fs.writeFileSync('Gruntfile.js', editor.toString());	
    }
    
    conflicts(){
	//console.log("conflicts(){...");
    }
    
    install(){
	//console.log("install(){...");
    }
    
    end(){
        
        //if you will use non typescript modules... 
        exec('git clone https://github.com/dojo/dojo.git', function(error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
		console.log('exec error: ' + error);
	    }
	});
        
	//exec('npm install && npm install @types/dojo && typings init', function(error, stdout, stderr) {
        exec('npm install', function(error, stdout, stderr) {
	    console.log('stdout: ' + stdout);
	    console.log('stderr: ' + stderr);
	    if (error !== null) {
		console.log('exec error: ' + error);
	    }
	});
    }//end
	   
};


