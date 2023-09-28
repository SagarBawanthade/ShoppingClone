import express from 'express';
import cors from 'cors';
import groceryData from './datasets/grocerydata.js';
const app = express();
app.use(cors());


app.get('/api/groceryData', (req, res) => {
    res.send(groceryData.packages);
});

const port = 3001;

app.listen(port, () => {
    console.log(`server is running a port no.${port}`)
})