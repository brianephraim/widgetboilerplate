'use strict';

module.exports = function (grunt) {

  
  var moment = require('./node_modules/moment/moment.js')
  console.log(moment(new Date()).format("YYYY-MM-DD"));
  // Project configuration.
  var pkgJson = require('./package.json')
  //var widgetName = pkgJson.name;
  var widgetName = grunt.option('name');
  console.log(widgetName,typeof widgetName)
  if(typeof widgetName === 'undefined'){
    widgetName = 'yourwidget';
  }
  var widgetNameAllLower = widgetName.toLowerCase();
  var widgetNameAllCap = widgetNameAllLower.toUpperCase();
  var widgetNameFirstCap = widgetNameAllLower.charAt(0).toUpperCase() + widgetNameAllLower.slice(1);
  var replacements = [
    {
      pattern: new RegExp("widgetboilerplate", "g"),
      replacement: widgetNameAllLower
    },
    {
      pattern: new RegExp("Widgetboilerplate", "g"),
      replacement: widgetNameFirstCap
    },
    {
      pattern: new RegExp("WIDGETBOILERPLATE", "g"),
      replacement: widgetNameAllCap
    }
  ];


  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
            expand: true, 
            //cwd: './', 
            src: ['js/widgetboilerplate.js'], 
            dest: './js/', 
            rename: function(dest, src) {
              // use the source directory to create the file
              // example with your directory structure
              //   dest = 'dev/js/'
              //   src = 'module1/js/main.js'
              return './'+widgetNameAllLower+'/js/' + widgetName + '.js';
            }
          },
          {
            expand: true, 
            //cwd: './', 
            src: ['css/widgetboilerplate.css'], 
            dest: './css/', 
            rename: function(dest, src) {
              // use the source directory to create the file
              // example with your directory structure
              //   dest = 'dev/js/'
              //   src = 'module1/js/main.js'
              return './'+widgetNameAllLower+'/css/'+widgetName + '.css';
            }
          },
          {
            expand: true, 
            cwd: './', 
            src: ['2013-11-07-widgetboilerplate.md'], 
            dest: './'+widgetNameAllLower+'/', 
            rename: function(dest, src) {
              // use the source directory to create the file
              // example with your directory structure
              //   dest = 'dev/js/'
              //   src = 'module1/js/main.js'
              return './'+widgetNameAllLower+'/'+moment(new Date()).format("YYYY-MM-DD") + '-' + widgetNameAllLower + '.md';
            }
          }
        ]
      }
    },
    clean: ['./'+widgetNameAllLower+'/js/widgetboilerplate.js','./'+widgetNameAllLower+'/css/widgetboilerplate.css','./'+widgetNameAllLower+'/2013-11-07-widgetboilerplate.md'],
    config: {
      dist: './'
    },
    'string-replace': {
      inline: {
        // files: {
        //   'widgetboilerplate.js': 'widgetboilerplate.js'
        // },
        files: [
          {
            src: '**/*.*', 
            dest: './'+widgetNameAllLower+'/', 
            filter: function(filepath) {
              
              //return (grunt.file.isDir(filepath) && require('fs').readdirSync(filepath).length === 0);
              var filepathHasBannedString = false;
              var bannedStrings = ['node_modules','Gruntfile.js','jquery.min.js','require.js','r.js','package.json','.git/'];

              for(var i=0,l=bannedStrings.length;i<l;i++){

                filepathHasBannedString = filepathHasBannedString || filepath.indexOf(bannedStrings[i]) === 0;
              }
              if(filepathHasBannedString){
                //console.log('----' + filepath)
                return false
              } else{
                console.log(filepath)
                return true;
              }
              
            }
          }
        ],
        options: {
          replacements: replacements
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('asdf', []);
  grunt.registerTask('default', ['string-replace','copy','clean']);
};