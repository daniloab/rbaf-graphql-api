import SERVER_ENV from './server.config';
import LOG_ENV from './logger.config';

var environment = process.env.NODE_ENV || 'development';

var serverConf = SERVER_ENV[environment];
var logConf = LOG_ENV[environment];

export {
    environment,
    serverConf,
    logConf
};