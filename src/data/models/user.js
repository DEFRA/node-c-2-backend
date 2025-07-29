import {Sequelize, DataTypes} from 'sequelize'
import { config } from '../../config.js'

// Connect to the database
const sequelize = new Sequelize(config.get('postgres.database'), config.get('postgres.user'), config.get('postgres.password'), {
  host: 'postgres',
  dialect: 'postgres'
})

// Define the User model
const User = sequelize.define('User', {
    userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
},
{
    tableName: 'users',
    timestamps: false
})

// Export the sequelize instance and User model
export { sequelize, User }