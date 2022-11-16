import combineRoutes from 'koa-combine-routers'
import demoRoutes from './demoRouter'
import userRoutesV1 from './v1/userRouter'
import commonRoutesV1 from './v1/commonRouter'

export default combineRoutes(demoRoutes, userRoutesV1, commonRoutesV1)