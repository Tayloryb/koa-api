import Router from 'koa-router'
import demoController from "../controller/demoController"

const router = new Router()

router.prefix('/api')
router.get('/demo', demoController.demo)


export default router