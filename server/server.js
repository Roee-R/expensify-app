const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');

const port = process.env.PORT || 3000; // setting up heroku port
app.use(express.static(publicPath));

app.get('*', (req,res)=>{
    res.sendFile(path.join(publicPath, 'index.html')) // cuz each reload we get 404 on server pathes (because he dont exsit), we need to tell the server in each reload run the public index.html file
})
app.listen(port, ()=>{
    console.log('Server is running!')
})