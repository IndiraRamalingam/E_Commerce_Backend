const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')
const contactRoutes = require('./routes/contactRoutes')
const paymentRoutes = require('./routes/paymentRoutes')

//add middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes)
app.use('/api/payment', paymentRoutes)

module.exports = app;