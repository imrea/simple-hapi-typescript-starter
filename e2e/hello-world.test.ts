import Hapi from '@hapi/hapi';
import { initServer } from '../src/server';

describe('GET /', () => {
  let server: Hapi.Server;

  beforeEach(async () => {
    server = await initServer();
  });

  afterEach(async () => {
    await server.stop();
  });

  it('responds with 200', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/',
    });

    expect(res.statusCode).toBe(200);
    expect(res.result).toMatchSnapshot();
  });
});
