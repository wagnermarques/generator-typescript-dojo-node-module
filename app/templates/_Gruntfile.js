//http://jessefreeman.com/dev-techniques/automating-typescript-with-node-and-grunt/

//https://github.com/gruntjs/grunt-contrib-watch
//https://www.npmjs.com/package/grunt-typescript
//https://c9.io/basarat/grunt-ts
//https://github.com/TypeStrong/grunt-ts
//https://github.com/DefinitelyTyped/DefinitelyTyped


//https://github.com/typings/typings
//https://github.com/typings/grunt-typings


//https://www.npmjs.com/package/grunt-ts
//https://github.com/TypeStrong/grunt-ts/blob/master/sample/Gruntfile.js
//https://www.tutorialspoint.com/grunt/grunt_configuring_tasks.htm
//https://aarontgrogg.com/blog/2016/03/04/how-to-use-dynamic-variables-in-a-grunt-config-file/


//grunt-typescript and grunt-ts

//grunt-typescript

//grunt-ts
//https://www.diycode.cc/projects/angular-ui/grunt-ts
//https://github.com/TypeStrong/grunt-ts/blob/master/sample/Gruntfile.js

//http://gruntjs.com/sample-gruntfile
module.exports = function(grunt) {

    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	/**
         * Constants for the Gruntfile so we can easily change the path for our environments.
         */
        BASE_PATH: '.',
        DEVELOPMENT_PATH: 'src/',
        PRODUCTION_PATH: 'dist/',

        //https://github.com/gruntjs/grunt-contrib-copy
        //Some simple pure js files was added to the generated project
        //that files must be moved to dist folder
        //ts files does not because ts transpiler to this job
        copy: {
	    files: {
		cwd: 'src/',  // set working folder / root to copy
		src: '**/*.js',           // copy all files and subfolders
		dest: 'dist/',    // destination folder
		expand: true           // required when using cwd
	    }
	},
        
	typings: {
	    install: {}
	},
        
        //http://www.typescriptlang.org/docs/handbook/compiler-options.html
        //https://github.com/TypeStrong/grunt-ts/issues/202
        //https://www.typescriptlang.org/docs/handbook/compiler-options.html
        ts: {
            default : {
                tsconfig: {
		    tsconfig: './tsconfig.json'
		}
                //src: ["**/*.ts", "!node_modules/**", '!bin/**'],                
                //options: {
                //    //module: 'commonjs'
                //    module: 'amd'
                //}
            }            
        },

        //https://www.npmjs.com/package/grunt-execute
        execute: {
            target: {
                src: ['dist/main.js']
            }
        },

        clean: {
            all: ['dist/**/*.js', '**/*.js.map',
		  '!node_modules/**', '!Gruntfile.js',
		  '!bin/**', 'test/**/*.js', 'test/**/*.js.map']
        },


	intern: {//from https://github.com/theintern/intern-examples/tree/master/grunt-example
	    client: {
		options: {
		    // for other available options, see:
		    // https://github.com/theintern/intern/wiki/Using-Intern-with-Grunt#task-options
		    config: 'tests/intern'
		}
	    },
	    clientSuiteGet: {
		// an example of specifying a suite name
		options: {
		    config: 'tests/intern',
		    suites: ['tests/lib/get']
		}
	    },
	    runner: {
		options: {
		    config: 'tests/intern',
		    runType: 'runner'
		}
	    }
	},	

	watch: {
            files: '**/*.ts',
            tasks: ['ts:dev','execute']
        }
	
    });

    grunt.log.write('Grunt running... \n');
    
    //grunt.loadNpmTasks('grunt-typings');
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-typings');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-execute');    

    grunt.registerTask(
	'default',
	['typings:install','copy','ts:default','execute','watch']);    
};

//grunt.registerTask('build', ['tslint', 'browserify', 'connect:server', 'watch']);
