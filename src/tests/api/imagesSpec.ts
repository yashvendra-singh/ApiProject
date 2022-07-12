import express from 'express';
import Request from 'supertest';

const app = express();
const request = Request;

describe('Test Images api', () => {
  it('success', () => {
    request(app).get('api/images').send({}).expect(200);
  });

  it('invalid path', () => {
    request(app).get('api/images/x').send().expect(404);
  });
});
