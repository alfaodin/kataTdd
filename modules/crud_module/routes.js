export default function (app, model, path) {
    const defaults = {
      get: true
    };
    const get = async (req, res) => {
      const data = await model.find(req.query);
      res.json({response: data, errors: []});
    };
    return {
      get: get,
      setup: (operations) => {
        operations = typeof operations !== 'undefined' ? operations : defaults;
        if (operations.get) {
          app.get(path, get);
        }
      }
    };
  }