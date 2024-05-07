const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');
const healthCheckRoute = require('./routes/healthCheckRoute')
const connectDB = require('./db/index')

const port = 8080
const app = express()

app.use(cors());
app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/', healthCheckRoute)

connectDB()

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})