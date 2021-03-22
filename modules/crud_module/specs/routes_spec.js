import abstractRoutes from '../routes';
describe('Routes', () => {  
  fit('should instance route', (done) => {
    const mock_app = {
      get: jasmine.createSpy('get')
    };
    const model = {
      find: () => {
        return 'data';
      }
    };
    const routes = abstractRoutes(mock_app, model, '/path');
    routes.setup({
      get: true
    });
    
    expect(mock_app.get).toHaveBeenCalledWith('/path', routes.get);
    const get_function = mock_app.get.calls.argsFor(0)[1];
    get_function({query: 'query'}, {
      json: (response) => {
        expect(response).toEqual({response: 'data', errors: []})
        done();
      }
    });
  });
});