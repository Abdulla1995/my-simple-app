module.exports = {
  apps: [
    {
      name: 'prod.app',
      exec_mode: 'cluster',
      instances: '2', // Or "max" - for maximum available of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
