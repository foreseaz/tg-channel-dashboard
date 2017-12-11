module.exports = {
  apps: [
    {
      name: 'tg',
      instances: 2,
      script: './src/server.js',
      exec_mode: 'cluster',
      env: {
        BOT_TOKEN: 'INSERT_YOUR_TOKEN_HERE',
        PORT: 8081
      },
      max_memory_restart: '300M',
      watch: false
    }
  ]
}
