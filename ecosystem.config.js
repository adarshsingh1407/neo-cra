module.exports = {
  /**
   * @author Adarsh Singh
   * @description PM2 Application Configuration
   */
  apps : [
    // DCW-2.0 Application
    {
      name      : 'DCW2',
      script    : 'server/index.js',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      combine_logs: true,
      env: {
        NODE_ENV: 'staging',
        PORT: 9002
      },
      env_staging: {
        NODE_ENV: 'staging',
        PORT: 9002
      },
      env_production : {
        NODE_ENV: 'production',
        PORT: 9002
      }
    }
  ]
};
