import path from 'path';
import log4js from 'koa-log4';

log4js.configure({
  appenders: {
    access: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      filename: path.resolve('logs', 'access.log'),
    },
    application: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      filename: path.resolve('logs', 'application.log'),
    },
    out: {
      type: 'console',
    },
  },
  categories: {
    default: { appenders: ['out'], level: 'info' },
    access: { appenders: ['access'], level: 'info' },
    application: { appenders: ['application'], level: 'WARN' },
  },
});

export const accessLogger = () => log4js.koaLogger(log4js.getLogger('access'));
export const logger = log4js.getLogger('application');
