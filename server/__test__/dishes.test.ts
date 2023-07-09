import supertest from 'supertest';

import app from '../app';
import { seedDatabase } from '../db';

beforeAll(async () => {
  await seedDatabase();

  await supertest(app).post('/api/v1/auth/register').send({
    username: 'moo',
    password: 'moo123',
    roleId: 1,
  });
});

describe('Testing the dishes route.', () => {
  it('Testing the success path, the controller should return 201 stats code.', async () => {
    const login = await supertest(app).post('/api/v1/auth/login').send({
      username: 'moo',
      password: 'moo123',
    });

    const token = login.headers['set-cookie'][0].split('=')[1].split(';')[0];

    const res = await supertest(app)
      .post('/api/v1/dishes/create')
      .set('Cookie', [`token=${token}`])
      .send({
        name: 'moo dish',
        price: 52,
        image: 'example.png',
        availability: true,
        ingredients: 'Salmon, Lemon, Olive Oil, Dill',
        category_id: 2,
      })
      .expect(201);

    expect(res.body.message).toBe('Dish created successfully');
  });
});

describe('Testing the get all dishes route.', () => {
  it('Testing the success path, the controller should return 200 stats code.', done => {
    supertest(app)
      .get('/api/v1/dishes')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        return done();
      });
  });
});

describe('Testing the get dish by id route.', () => {
  it('Testing the success path, the controller should return 200 stats code.', done => {
    supertest(app)
      .get('/api/v1/dishes/1')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        return done();
      });
  });

  it('Testing the success path, the controller should return 404 stats code.', done => {
    supertest(app)
      .get('/api/v1/dishes/100')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(404);
        return done();
      });
  });
});

describe('Testing the delete dish by id route.', () => {
  it('Testing the success path, the controller should return 200 stats code.', async () => {
    const login = await supertest(app).post('/api/v1/auth/login').send({
      username: 'moo',
      password: 'moo123',
    });

    const token = login.headers['set-cookie'][0].split('=')[1].split(';')[0];
    const res = await supertest(app)
      .delete('/api/v1/dishes/delete/1')
      .set('Cookie', [`token=${token}`])
      .expect(200);

    expect(res.body.message).toBe('Dish deleted successfully');
  });

  it('Testing the success path, the controller should return 404 stats code.', async () => {
    const login = await supertest(app).post('/api/v1/auth/login').send({
      username: 'moo',
      password: 'moo123',
    });

    const token = login.headers['set-cookie'][0].split('=')[1].split(';')[0];
    const res = await supertest(app)
      .delete('/api/v1/dishes/delete/100')
      .set('Cookie', [`token=${token}`])
      .expect(404);

    expect(res.body.msg).toBe('Dish not found');
  });
});

describe('Testing the update dish by id route.', () => {
  it('Testing the success path, the controller should return 200 stats code.', async () => {
    const login = await supertest(app).post('/api/v1/auth/login').send({
      username: 'moo',
      password: 'moo123',
    });

    const token = login.headers['set-cookie'][0].split('=')[1].split(';')[0];

    const res = await supertest(app)
      .put('/api/v1/dishes/update/2')
      .set('Cookie', [`token=${token}`])
      .send({
        name: 'moo dish',
        price: 52,
        image: 'example.png',
        availability: true,
        ingredients: 'Salmon, Lemon, Olive Oil, Dill',
        category_id: 2,
      })
      .expect(200);

    expect(res.body.message).toBe('Dish updated successfully');
  });
});

afterAll(async () => {
  await supertest(app).post('/api/v1/auth/logout');
});
