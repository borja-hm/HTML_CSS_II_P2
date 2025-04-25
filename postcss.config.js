// postcss.config.js
module.exports = {
    plugins: [
      require('postcss-preset-env')({
        stage: 1, // habilita funciones modernas
        features: {
          'layer-rules': true // activa soporte para @layer
        }
      })
    ]
  }