import supertest from 'supertest';

import app from '../app';
import { seedDatabase } from '../db';

beforeAll(() => seedDatabase());

describe('Testing the signup route', () => {
  it('test the path, controller should return 201 stats code', done => {
    supertest(app)
      .post('/api/v1/auth/register')
      .send({
        username: 'joe Does1',
        password: '123456',
        roleId: 2,
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);

        expect(res.body.msg).toBe('the user has been created successfully');
        return done();
      });
  });
  it('Testing the success path, the controller should return id of the record in the database.', done => {
    supertest(app)
      .post('/api/v1//auth/register')
      .send({
        username: 'joh_77',
        password: '123456',
        roleId: 1,
      })
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.id).toBeDefined();
        return done();
      });
  });
});
