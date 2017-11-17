module.exports = {
  /**
   * @author Adarsh Singh
   * @description PM2 Application Configuration
   */
  apps: [
    {
      name: 'NEOCRA',
      script: 'server/index.js',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      combine_logs: true,
      env: {
        NODE_ENV: 'staging',
        REACT_APP_ENV: 'staging',
        PORT: 9001
      },
      env_staging: {
        NODE_ENV: 'staging',
        REACT_APP_ENV: 'staging',
        PORT: 9001
      },
      env_production: {
        NODE_ENV: 'production',
        REACT_APP_ENV: 'production',
        PORT: 9001
      }
    }
  ]
};
