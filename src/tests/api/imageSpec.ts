import express from 'express';
import Request from 'supertest';

const app = express();
const request = Request;

describe('Test Image api', () => {
  it('success', () => {
    request(app)
      .get('api/image?filename=palmtunnel&width=200&height=200')
      .send()
      .expect(200);
  });

  it('invalid file name', () => {
    request(app)
      .get('api/image?filename=&width=200&height=200')
      .send()
      .expect(400);
  });

  it('negative width', () => {
    request(app)
      .get('api/image?filename=palmtunnel&width=-200&height=200')
      .send()
      .expect(400);
  });

  it('missing height', () => {
    request(app)
      .get('api/image?filename=palmtunnel&width=-200&height=')
      .send()
      .expect(400);
  });

  it('invalid path', () => {
    request(app)
      .get('api/images/x?filename=palmtunnel&width=-200&height=')
      .send()
      .expect(404);
  });
});
