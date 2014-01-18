module.exports = function (grunt) {
	var args = {
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			build: 'out'
		},

		jshint: {
			files: 'src/*.js'
		},

		copy: {
			build: {
				files: [
					{
						expand: true,
						cwd: 'src/',
						src: 'index.html',
						dest: 'out/',
						flatten: true
					}
				]
			}
		},

		cssmin: {
			combine: {
				files: {
					'out/p90x3.css': 'src/p90x3.css'
				}
			}
		},

		'closure-compiler': {
			build: {
				closurePath: '/home/kjiwa/opt/closure',
				js: 'src/*.js',
				jsOutputFile: 'out/p90x3.js',
				noreport: true,
				options: {
					compilation_level: 'ADVANCED_OPTIMIZATIONS',
					language_in: 'ECMASCRIPT5_STRICT',
					warning_level: 'VERBOSE'
				}
			}
		}
	};

	grunt.initConfig(args);
	grunt.loadNpmTasks('grunt-closure-compiler');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', [ 'jshint', 'copy', 'cssmin', 'closure-compiler' ]);

	// args['closureCompiler'] = {
	// 	options: {
	// 		compilerFile: '/home/kjiwa/opt/closure/compiler.jar',
	// 		compilerOpts: {
	// 			compilation_level: 'ADVANCED_OPTIMIZATIONS',
	// 			language_in: 'ECMASCRIPT5_STRICT',
	// 			warning_level: 'VERBOSE'
	// 		}
	// 	},
	//
	// 	build: {
	// 		src: [],
	// 		dest: 'out/p90x3.js'
	// 	}
	// };
	//
	// grunt.loadNpmTasks('grunt-closure-compiler');

	// uglify: {
	// 	build: {
	// 		src: [],
	// 		dest: 'out/p90x3.js'
	// 	}
	// };
	//
	// grunt.loadNpmTasks('grunt-contrib-uglify');
};
