const express = require('express');
const app =express();
const PORT = 3000

//Define a basic route
app.get('/', (req,res) => {
    res.send('Welcome to My Express Server');
});

//Start the server
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});