import Router from 'koa-router'
import userController from '../../controller/userController'

const router = new Router()

router.prefix('/api/v1')

router.post('/login', userController.login)

router.get('/user/info', userController.getUserInfo)


export default router