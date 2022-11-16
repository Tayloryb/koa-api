import Router from 'koa-router'
import commonController from '../../controller/commonController'

const router = new Router()

router.prefix('/api/v1')

router.get('/getCaptcha', commonController.getCaptcha)

export default router