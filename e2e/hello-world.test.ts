import Hapi from '@hapi/hapi';
import { createServer } from '../src/server';

let server: Hapi.Server;

beforeEach(async () => {
  server = await createServer();
  await server.initialize();
});

afterEach(async () => {
  await server.stop();
});

describe('GET /', () => {
  it('responds with 200', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/',
    });

    expect(res.statusCode).toBe(200);
    expect(res.result).toMatchSnapshot();
  });
});
