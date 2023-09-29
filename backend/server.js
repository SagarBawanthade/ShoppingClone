import express from 'express';
import groceryData from './datasets/grocerydata.js';
const app = express();



app.get('/api/groceryData', (req, res) => {
    res.send(groceryData);
});

const port = 3001;

app.listen(port, () => {
    console.log(`server is running a port no.${port}`)
})