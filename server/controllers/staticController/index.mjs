import code from '../../utils/code.mjs';
import { logger } from '../../utils/logger.mjs';

import Base from './base.mjs';

class StaticController extends Base {
  constructor() {
    super();
  }

  homeFile(ctx) {
    try {
      const home = this.readFile('modules/home.html');
      [ctx.status] = code.APISUCCESS;
      ctx.body = home;
    } catch (err) {
      logger.error(err.message);
      [ctx.status, ctx.body] = code.SERVERERROR;
    }
  }
}

export default new StaticController();
