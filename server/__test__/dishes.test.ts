import supertest from 'supertest';

import app from '../app';
import { seedDatabase } from '../db';

beforeAll(() => seedDatabase());

describe('Testing the dishes route.', () => {
  it('Testing the success path, the controller should return 201 stats code.', done => {
    supertest(app)
      .post('/api/v1/dishes/create')
      .send({
        name: 'moo dish',
        price: 52,
        image: 'example.png',
        availability: true,
        ingredients: 'Salmon, Lemon, Olive Oil, Dill',
        categoryId: 2,
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(201);
        return done();
      });
  });

  it('Testing the success path, the controller should return 400 stats code.', done => {
    supertest(app)
      .post('/api/v1/dishes')
      .send({
        price: 52,
        image: 'example.png',
        availability: true,
        ingredients: 'Salmon, Lemon, Olive Oil, Dill',
        categoryId: 2,
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        return done();
      });
  });

  it('Testing the success path, the controller should return 200 stats code.', done => {
    supertest(app)
      .get('/api/v1/dishes')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        return done();
      });
  });

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

  it('Testing the success path, the controller should return 200 stats code.', done => {
    supertest(app)
      .delete('/api/v1/dishes/delete/1')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        return done();
      });
  });

  it('Testing the success path, the controller should return 404 stats code.', done => {
    supertest(app)
      .delete('/api/v1/dishes/delete/100')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(404);
        return done();
      });
  });

  it('Testing the success path, the controller should return 200 stats code.', done => {
    supertest(app)
      .put('/api/v1/dishes/update/2')
      .send({
        name: 'moo dish',
        price: 52,
        image: 'example.png',
        availability: true,
        ingredients: 'Salmon, Lemon, Olive Oil, Dill',
        categoryId: 2,
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        return done();
      });
  });

  it('Testing the success path, the controller should return 404 stats code.', done => {
    supertest(app)
      .put('/api/v1/dishes/update/100')
      .send({
        name: 'moo dish',
        price: 52,
        image: 'example.png',
        availability: true,
        ingredients: 'Salmon, Lemon, Olive Oil, Dill',
        categoryId: 2,
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(404);
        return done();
      });
  });

  it('Testing the success path, the controller should return 400 stats code.', done => {
    supertest(app)
      .put('/api/v1/dishes/update/2')
      .send({
        price: 52,
        image: 'example.png',
        availability: true,
        ingredients: 'Salmon, Lemon, Olive Oil, Dill',
        categoryId: 2,
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        return done();
      });
  });

  it('Testing the success path, the controller should return 400 stats code.', done => {
    supertest(app)
      .put('/api/v1/dishes/update/2')
      .send({
        name: 'moo dish',
        price: 52,
        image: 'example.png',
        availability: true,
        ingredients: 'Salmon, Lemon, Olive Oil, Dill',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        return done();
      });
  });

  it('Testing the success path, the controller should return 400 stats code.', done => {
    supertest(app)
      .put('/api/v1/dishes/update/2')
      .send({
        name: 'moo dish',
        price: 52,
        image: 'example.png',
        availability: true,
        categoryId: 2,
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        return done();
      });
  });
});
