// const Koa = require("koa");
// const Koa = require('koa')
// const Router = require("koa-router");
// const { koaBody } = require("koa-body");
// const cors = require("@koa/cors");
import Koa from 'koa'
import path from 'path'
import Router from 'koa-router'
import { koaBody } from 'koa-body'
import cors from '@koa/cors'
import compose from 'koa-compose'
import statics from 'koa-static'

const app = new Koa();
const router = new Router();

/**
 * 使用koa-conpose 集成中间件
 */
const middlewares = compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors()
])
app.use(koaBody())
// console.log('koaBody :>> ', koaBody);
// const body = koaBody
console.log('111111 :>> ', 31311111113);


router.prefix('/api')
router.post("/user", async (ctx) => {
  console.log("ctx :>> ", ctx.request.body, );
  ctx.body = {
    ...ctx.request.body
  }
});

router.get('/get', (ctx) => {
  const query = ctx.request.query
  console.log('request :>> ', query, query.encodeid);
  ctx.body = {
    id: query.encodeid
  }
})

app
  .use(middlewares)
  .use(router.routes())
  .use(router.allowedMethods())

app.listen("9800");
