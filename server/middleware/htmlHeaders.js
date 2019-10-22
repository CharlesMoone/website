export default (ctx, next) => {
  ctx.set('Content-Type', 'text/html');
  next();
};
