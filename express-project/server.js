const express = require('express');
const path = require('path')

const messageRouter = require('./routes/messages.router')
const friendsRouter = require('./routes/friends.router');

const app = express();

const PORT =3000;


app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.baseUrl} ${req.url}`);
    next();
    const end = Date.now();
    console.log(`this action spend: ${end - start} ms`)
})
app.use('/site',express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/friends',friendsRouter);
app.use('/messages',messageRouter);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}...`)
});