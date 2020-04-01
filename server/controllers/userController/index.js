import code from '../../utils/code';
import { logger } from '../../utils/logger';

class UserController {
  constructor() {}

  async getUser(ctx) {
    try {
      [ctx.status, ctx.body] = code.APISUCCESS;
      ctx.body = {
        ...ctx.body,
        data: 1,
      };
    } catch (err) {
      logger.error(err.message);
      [ctx.status, ctx.body] = code.SERVERERROR;
    }
  }
}

export default new UserController();
