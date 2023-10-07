import express from 'express';
import groceryData from './datasets/grocerydata.js';
const app = express();



app.get('/api/groceryData', (req, res) => {
    res.send(groceryData);
});


app.get('/api/groceryData/slug/:slug', (req, res) => {
    const product = groceryData.find((x) => x.slug === req.params.slug);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'PRODUCT NOT FOUND' })
    };
});

app.get('/api/groceryData/:id', (req, res) => {
    const product = groceryData.find((x) => x.id === parseInt(req.params.id));
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'PRODUCT NOT FOUND' })

    };
});


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`server is running a port no.${port}`)
})