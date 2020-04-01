import Router from 'koa-router';

import userController from '../controllers/userController';

const router = new Router();

router.get('/api/user', userController.getUser);

export default router;
