const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css:{
    loaderOptions:{
      sass:{
        implementation: require('sass'),
        sassOptions: {
          indentedSyntax: true
        },
        prependData: `@import "@/assets/styles/variables.scss";`
      }
    }
  }
})
