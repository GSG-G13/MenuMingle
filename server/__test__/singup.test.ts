import supertest from 'supertest';

import app from '../app';
import { seedDatabase } from '../db';

beforeAll(async () => {
  await seedDatabase();
});

describe('Testing the signup route.', () => {
  it('Testing the success path, the controller should return 201 stats code.', done => {
    supertest(app)
      .post('/api/v1/auth/register')
      .send({
        username: 'meee',
        password: 'root123',
        roleId: 1,
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(201);
        return done();
      });
  });

  it('Testing the success path, the controller should return 201 stats code.', done => {
    supertest(app)
      .post('/api/v1/auth/register')
      .send({
        username: 'meee',
        password: 'root123',
        roleId: 1,
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        return done();
      });
  });
});
