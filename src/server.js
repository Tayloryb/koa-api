import Koa from "koa";
import path from "path";
import { koaBody } from "koa-body";
import cors from "@koa/cors";
import compress from 'koa-compress'
import compose from "koa-compose";
import statics from "koa-static";
import router from "./routes/routes";

const app = new Koa();

const isDevMode = process.env.NODE_ENV === "production" ? false : true;

/**
 * 使用koa-conpose 集成中间件
 */
const middlewares = compose([
  koaBody(),
  statics(path.join(__dirname, "../public")),
  cors(),
]);


/**
 * compress 压缩中间件
 */
if (!isDevMode) {
  app.use(compress())
}

// app.use((ctx, next) => {
//   console.log('ctx.request :>> ', ctx.request);
//   next()
// })

app.use(middlewares).use(router());

app.listen("9800");
