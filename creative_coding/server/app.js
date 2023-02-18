const express = require('express');
const app = express();
const path = require('path');

PORT = process.env.PORT || 5000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
})

app.listen(PORT, () => console.log(`⚡ Server is listening on ${PORT}`))
