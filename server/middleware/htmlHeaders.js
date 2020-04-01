export default (ctx, next) => {
  ctx.set('Content-Type', 'text/html');
  ctx.set('Cache-Control', 'max-age=300');
  next();
};
