import express from 'express';
import { __dirname } from './util.js';


import usersRouter from './routes/users.router.js';
import productsRouter from './routes/products.router.js';

const app = express()
const PORT = 3000

app.use(express.urlencoded ({extended: true}));
app.use(express.json());

app.use("/",express.static(__dirname + '/public'));
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);


app.get('/', (req, res) => {
  res.send('HOLA MUNDO!')
})



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})