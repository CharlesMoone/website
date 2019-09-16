import Router from 'koa-router';

import { accessLogger } from '../utils/logger.mjs';
import htmlHeaders from '../middleware/htmlHeaders.mjs';

import staticController from '../controllers/staticController';

const router = new Router();

router
  .use(accessLogger())
  .use(htmlHeaders)
  .get('/', staticController.homeFile.bind(staticController));

export default router;
