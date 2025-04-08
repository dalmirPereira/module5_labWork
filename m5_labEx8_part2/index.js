const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

//----------------------------------------------------------------
// Connecting fake-store.html static front-end page

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the fake-store.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'fakeStore.html'));
});

//----------------------------------------------------------------
// Connecting routes

// import all fake-store routes
const fakeStoreRoutes = require('./routes/fakeStoreRoutes');
// map the fake-store routes to our app
app.use('/getProduct', fakeStoreRoutes);


//----------------------------------------------------------------
//initiating port1

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});