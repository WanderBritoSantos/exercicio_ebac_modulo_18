
module.exports = function(grunt) {

  // Configurações principais do projeto
  grunt.initConfig({

    // Lê as informações do package.json
    pkg: grunt.file.readJSON('package.json'),

    // Tarefa para minificar arquivos HTML
    htmlmin: {
      dist: { // Modo de produção
        options: {
          removeComments: true, // remove comentários do HTML
          collapseWhitespace: true // remove espaços em branco extras
        },
        files: [{
          expand: true, // permite múltiplos arquivos
          cwd: "src/", // diretório de origem
          src: ['**/*.html'], // arquivos a incluir
          dest: 'dist' // destino dos arquivos minificados
        }]
      },
      dev: { // Modo de desenvolvimento
        options: {
          removeComments: false, // mantém os comentários
          collapseWhitespace: false // mantém os espaços
        },
        files: [{
          expand: true,
          cwd: "src/",
          src: ['**/*.html'],
          dest: 'dev'
        }]
      }
    },

    // Tarefa para compilar LESS para CSS
    less: {
      development: { // CSS sem compressão para desenvolvimento
        files: {
          'dev/css/main.css': 'src/css/main.less'
        }
      },
      production: { // CSS comprimido para produção
        options: {
          compress: true
        },
        files: {
          'dist/css/main.min.css': 'src/css/main.less'
        }
      }
    },
    
    // Tarefa para copiar arquivos JS para a pasta de desenvolvimento
    copy: {
      dev: {
        expand: true,
        cwd: 'src/js/', // diretório de origem
        src: '**/*.js', // arquivos JS
        dest: 'dev/js/' // destino dos arquivos copiados
      }
    },

    // Tarefa para minificar os arquivos JS para produção
    uglify: {
      dist: {
        options: {
          mangle: true, // renomeia variáveis para reduzir tamanho
          compress: true, // remove espaços e otimiza o código
          output: {
            comments: false // remove todos os comentários
          }
        },
        files: [{
          expand: true,
          cwd: 'src/js/', // origem dos arquivos
          src: '**/*.js', // todos os arquivos JS
          dest: 'dist/js/', // destino da versão minificada
          ext: '.min.js' // extensão final dos arquivos
        }]
      }
    },

    // Observa mudanças nos arquivos para recompilar automaticamente
    watch: {
      html: {
        files: ['src/**/*.html'], // observa arquivos HTML
        tasks: ['htmlmin:dist', 'htmlmin:dev'], // tarefas executadas ao alterar
        options: {
          spawn: false // mais rápido e leve
        }
      },
      styles: {
        files: ['src/css/**/*.less'], // observa arquivos LESS
        tasks: ['less:development', 'less:production'],
        options: {
          spawn: false
        }
      },
      scripts: {
        files: ['src/js/**/*.js'], // observa arquivos JS
        tasks: ['copy:dev', 'uglify:dist'], // copia para dev e minifica para dist
        options: {
          spawn: false
        }
      }
    },

    // Executa múltiplas tarefas ao mesmo tempo (ideal para watch)
    concurrent: {
      dev: ['watch'], // tarefas que serão executadas em paralelo
      options: {
        logConcurrentOutput: true // mostra a saída dos processos simultâneos
      }
    }
  });

  // Carrega os plugins do grunt
  grunt.loadNpmTasks('grunt-contrib-htmlmin'); // minificação HTML
  grunt.loadNpmTasks('grunt-contrib-less'); // compilação LESS
  grunt.loadNpmTasks('grunt-contrib-watch'); // observador de arquivos
  grunt.loadNpmTasks('grunt-concurrent'); // execução paralela
  grunt.loadNpmTasks('grunt-contrib-copy'); // cópia de arquivos
  grunt.loadNpmTasks('grunt-contrib-uglify'); // minificação JS

  // Tarefa padrão: roda tudo de forma contínua
  grunt.registerTask('default', ['concurrent:dev']);

};
