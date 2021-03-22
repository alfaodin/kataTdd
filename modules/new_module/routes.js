import model from "./model";
import abstract_route from '../crud_module/routes';


export default function (app) {

    const routes = abstract_route(app, model, '/users');
    routes.setup({get: true});

    // app.get('/users', async (req, res, next) => {
    //     const users = await model.find();
    //     res.json(users);
    // });

    // app.post('/users', (req, res) => {
    //     res.json({ create: true });
    // });

    // app.put('/users', (req, res) => {
    //     res.json({ update: true });
    // });

    // app.delete('/users', (req, res) => {
    //     res.json({ update: true });
    // });
}