import { Sequelize } from 'sequelize'

const conn = new Sequelize("timeplanner", "root", "nmDev77!.", {
    host: "localhost",
    dialect: 'mysql'
})

export default conn;