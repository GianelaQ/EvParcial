
const request = require('supertest');
const app = require('../app');  

describe('Probando la ruta raiz', () => {
    test('Deberia responder al metodo get', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        // Verifica el contenido del archivo HTML si es necesario
        expect(response.text).toContain('<title>Index</title>');
    });
});

describe('Probar la ruta /nosotros', () => {
    test('Deberia responder al metodo get', async () => {
        const response = await request(app).get('/nosotros');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('<title>About</title>'); // Ajusta según el contenido real
    });
});

describe('Probar la ruta /camiseta', () => {
    test('Deberia responder al metodo get', async () => {
        const response = await request(app).get('/camiseta');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('<title>Clothes</title>'); // Ajusta según el contenido real
    });
});

describe('Probar la ruta /blog', () => {
    test('Deberia responder al metodo get', async () => {
        const response = await request(app).get('/blog');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('<title>Blog</title>'); // Ajusta según el contenido real
    });
});

describe('Probar la ruta /contacto', () => {
    test('Deberia responder al metodo get', async () => {
        const response = await request(app).get('/contacto');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('<title>Contact</title>'); // Ajusta según el contenido real
    });
});
