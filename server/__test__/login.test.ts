import supertest from 'supertest';

import app from '../app';
import { seedDatabase } from '../db';

beforeAll(async () => {
  await seedDatabase();
});

describe('Testing the signup route.', () => {
  it('Testing the success path, the controller should return 201 stats code.', async () => {
    await supertest(app)
      .post('/api/v1/auth/register')
      .send({
        username: 'ahmad',
        password: 'root123',
        roleId: 1,
      })
      .expect(201);

    const res = await supertest(app)
      .post('/api/v1/auth/login')
      .send({
        username: 'ahmad',
        password: 'root123',
      })
      .expect(200);

    expect(res.body.msg).toBe('the has been login successfully');
  });

  it('Testing the success path, the controller should return 401 status code.', done => {
    supertest(app)
      .post('/api/v1/auth/login')
      .send({
        username: 'ahmed',
        password: 'wrong password',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(401);
        return done();
      });
  });

  it('Testing the success path, the controller should return 201 stats code.', done => {
    supertest(app)
      .post('/api/v1/auth/login')
      .send({
        username: 'userDoesNotExit',
        password: 'wrong password',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(401);
        return done();
      });
  });
});
