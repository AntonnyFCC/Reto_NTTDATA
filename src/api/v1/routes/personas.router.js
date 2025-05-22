import { personas } from '../controllers/personas.controller.js';

const routes = (app) => {
    app.get('/personas', personas);
};

export default routes;
