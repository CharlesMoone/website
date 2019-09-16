import Router from 'koa-router';
import path from 'path';
import fs from 'fs';

import code from '../utils/code.mjs';
import { logger, accessLogger } from '../utils/logger.mjs';
import htmlHeaders from '../middleware/htmlHeaders.mjs';

const router = new Router();

router
  .use(accessLogger())
  .use(htmlHeaders)
  .get('/', ctx => {
    try {
      const home = fs.readFileSync(path.resolve('modules/home.html'));
      ctx.status = 200;
      ctx.body = home;
    } catch (err) {
      logger.error(err.message);
      [ctx.status, ctx.body] = code.SERVERERROR;
    }
  });

export default router;
