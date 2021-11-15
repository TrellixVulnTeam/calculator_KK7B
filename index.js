const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res, next) => {
    res.sendFile('/Users/einarkjellback/code/calculator/index.html')
})

app.listen(port, () => {
    console.log('Server running at http://localhost:${port}');
});
