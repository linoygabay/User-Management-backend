const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const healthCheckRoute = require('./routes/healthCheckRoute')
const connectDB = require('./config/db')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.json');
const {PORT, DB_CONNECTION_STRING} = require('./config/constants')

const app = express()

app.use(cors());
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/users', usersRoutes);
app.use('/', healthCheckRoute)

connectDB(DB_CONNECTION_STRING)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})