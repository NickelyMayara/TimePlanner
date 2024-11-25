import { Sequelize } from 'sequelize'

const conn = new Sequelize("timeplanner", "root", "nmDev77!.", {
    host: "localhost",
    dialect: 'mysql'
})

if(!conn){
    console.log(error)
}else{
    console.log('conectado')
}

export default conn;