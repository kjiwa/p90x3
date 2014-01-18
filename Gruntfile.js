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
			main: {
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

		uglify: {
			build: {
				src: [
					'src/common.js',
					'src/arrays.js',
					'src/dates.js',
					'src/events.js',
					'src/html.js',
					'src/i18n.js',
					'src/properties.js',
					'src/strings.js',
					'src/video.js',
					'src/calendar.js',
					'src/workout.js',
					'src/plan.js',
					'src/index.js'
				],

				dest: 'out/p90x3.js'
			}
		}
	};

	grunt.initConfig(args);
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', [ 'jshint', 'copy', 'cssmin', 'uglify' ]);
};
