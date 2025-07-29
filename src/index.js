import process from 'node:process'
import { sequelize } from './data/models/user.js'
import { createLogger } from './common/helpers/logging/logger.js'
import { startServer } from './api/server.js'

await startServer()

//syncing the database (so that the table is created if it does not exist)
await sequelize.sync()

process.on('unhandledRejection', (error) => {
  const logger = createLogger()
  logger.info('Unhandled rejection')
  logger.error(error)
  process.exitCode = 1
})
