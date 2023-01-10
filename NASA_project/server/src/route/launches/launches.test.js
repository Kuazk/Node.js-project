const request = require('supertest');
const app = require('../../app')

describe('Test GET /launches', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app)
            .get('/launches')
            .expect('Content-Type', /json/)
            .expect(200);

    });
});

describe('Test POST /launch' , () => {
    test('It should respond with 201 success creat', async () => {
        const response = await request(app)
            .post('/launches')
            .send({
                mission: 'uss enterprise',
                rocket: 'asdlfj',
                target: 'keplier 212',
                launchDate: 'January 4, 2028',
            })
            .expect('Content-Type', /json/)
            .expect(201);
        
    });
    test('it should be catch missing require', () => {

    })
})