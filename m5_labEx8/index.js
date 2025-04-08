const express = require('express');
const path = require('path'); // To handle file paths correctly

const app = express();
const port = 3000;

//----------------------------------------------------------------
//Creating swagger route
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//----------------------------------------------------------------
// Connecting calculator.html static front-end page

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calculator.html'));
});

//----------------------------------------------------------------
// Connecting routes

// import all calculator routes
const calculatorRoutes = require('./routes/calculatorRoutes');
// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);


//----------------------------------------------------------------
//initiating port1

app.listen(port, () => {
    console.log(`Example app listening
at http://localhost:${port}`);
});