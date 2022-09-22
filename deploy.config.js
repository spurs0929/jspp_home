module.exports = {
  app: [
    {
      name: 'jspp-home',
      script: 'app.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: '8.209.250.187',
      ref: 'origin/master',
      repo: 'git@github.com:spurs0929/jspp_home.git',
      path: '/www/jspp_home/production',
      'pre-deploy': 'git fetch --all',
			'post-deploy': 'npm install && npm run prd && pm2 startOrRestart deploy.config.js --env production'
    }
  }
}