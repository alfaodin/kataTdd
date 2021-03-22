import middleware from '../middleware';

describe('Middleware', () => {
  fit('should add logged User in request', (done) => {
    let req = {};
    middleware(req, null, () => {
      expect(req.logged_user).toBe('user_data');
      done();
    });
  });
});
