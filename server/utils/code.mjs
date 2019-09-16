export default {
  APISUCCESS: [200, { code: 0, msg: 'success' }],
  COOKIEERROR: [401, { code: 1, msg: 'cookie error' }],
  AUTHERROR: [403, { code: 2, msg: 'username or password error' }],
  SERVERERROR: [500, { code: 9, msg: 'server error' }],
};
