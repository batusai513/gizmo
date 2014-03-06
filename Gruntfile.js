module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),
        'uglify': {
            'options': {
                'banner': '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            'build': {
                'src': 'src/gizmo.js',
                'dest': 'dist/gizmo.js'
            }
        },
        'express': {
            'options': {
                'background': false
            },
            'dev': {
                'options': {
                    'script': 'express.js'
                }
            }
        },
        'watch': {
            'express': {
                'files': ['./src/*.js', './src/**/*.js', './example/*.js', './example/**/*.js', './example/*.html', './example/**/*.html'],
                'tasks': [],
                'options': {
                    'spawn': false
                }
            }
        },
		'requirejs': {
			'minified': {
				'options': {
					'baseUrl': '.',
					'name': 'gizmo',
					'out': 'dist/gizmo.js',
					'optimize': 'uglify',
					'mainConfigFile': 'require.config.build.js'
				}
			},
			'unminified': {
				'options': {
					'baseUrl': '.',
					'name': 'gizmo',
					'out': 'dist/gizmo.js',
					'optimize': 'none',
					'mainConfigFile': 'require.config.build.js'
				}
			}
		}
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-express-server');


    // Default task(s).
    grunt.registerTask('default', ['uglify']);

    // Express server
    grunt.registerTask('server', ['express:dev', 'watch']);

};
