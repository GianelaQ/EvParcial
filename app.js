const express = require('express')

const config = require('./public/scripts/config')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.all('/user', (req, res, next) => {
    console.log( 'paso por aqui')
    next()
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})
app.get('/nosotros', (req, res) => {
    res.sendFile(__dirname + '/public/about.html')
})
app.get('/camiseta', (req, res) => {
    res.sendFile(__dirname + '/public/clothes.html')
})
app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/public/blog.html')
})
app.get('/contacto', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html')
})
app.get('/carrito', (req, res) => {
    res.sendFile(__dirname + '/public/carrito.html')
})

module.exports = app; 

if (require.main === module) {
    const PORT = 8000;
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
}
app.use(express.static('public'));

app.listen(config.port, () => {
    console.log(`Servidor corriendo en el puerto ${config.port}, http://localhost:3000/`)
})