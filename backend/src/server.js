import express from 'express'
import cors from 'cors'
import conn from './config/conn.js'

const port = 3333
const app = express()

import Funcionarios from "./models/funcionariosModels.js"
import loginRouter from "./router/funcionariosRouter.js"

app.use(cors())
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.use("/login", loginRouter)

conn
    .sync()
    .then(() => {
        app.listen(port, () => {
            console.log(`Disponível em https://localhost:${port}🟢`)
        })
    })
    .catch((error) => console.log(error))
