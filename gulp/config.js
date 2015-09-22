'use strict';

var src = 'src';
var dest = 'dist';

module.exports = {
    src: src,
    dest: dest,
    browser: {
        files: ['src/client/**/*.js']
    },
    html: {
        files: ['src/client/**/*.html']
    },
    css: {
        files: ['src/client/**/*.css']
    },
    sass: {
        files: ['src/client/**/*.scss']
    },
    browserify: {
        // enable sourcemaps
        debug: true,
        // optional file extensions
        extensions: ['.jsx'],
        // bundles to create
        bundleConfigs: [{
            entries: src + '/server/index.js',
            dest: dest,
            outputName: 'app.js'
        }]
    },
    browserSync: {
        server: {
            // serve the src for sourcemap linkage
            baseDir: [dest, src]
        },
        files: [
            dest + '/**',
            // exclude map files
            '!' + dest + '/**.map'
        ]
    },
    clean: {
        files: [
            '.swarm',
            '.testswarm',
            '.tmp',
            'dist*',
            'coverage*',
            'report*'
        ]
    },
    watch: {
        files: [
            src + '/**/*.js',
            'test/**/*.js'
        ],
        options: {
            ui: 'bdd',
            reporter: 'spec',
            timeout: 3000
        }
    }
};
