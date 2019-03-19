import Koa from 'koa'
import path from 'path'
import logger from 'koa-pino-logger'
import router from 'koa-route'
import static_ext from 'koa-static'
import cors from 'koa2-cors'
const app = new Koa()
const static_path = path.resolve(__dirname, "../frontend/public")
app.use(logger())
app.use(cors())
app.use(static_ext(static_path))
app.use(router.get('/test', async ctx => {
    ctx.response.type = 'application/json'
    ctx.body = JSON.stringify({
        'message': 'Hello World'
    })
}))

app.listen(4000)