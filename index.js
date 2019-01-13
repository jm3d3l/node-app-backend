const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.get('/', (req,res) => res.send('app is listening....'))


const _port = process.env.PORT || 5000;

app.listen(_port, () => console.log(`listen to port: ${_port}`))