import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'
import notFound from './routes/notFound'
import internError from './routes/internError'
import cors from 'cors'
 
 
dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', routes)
app.use(notFound)
app.use(internError)



try {
    let port = process.env.PORT_SERVER || 3000;
    app.listen(port, () => {
        console.log('Rodando na porta ' + port)
    })
} catch (error) {
    // lidar com erro 
    console.error(error)
}

process.on('uncaughtException', (error, origin) => {
    // lidar com erro 
    console.error(`${error.stack}  origem => ${origin}`)
})
