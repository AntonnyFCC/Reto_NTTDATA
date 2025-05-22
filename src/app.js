import fastify from "fastify";
import personasRoutes from "./api/v1/routes/personas.router.js";

const app = fastify({
    logger: true,
});

app.register(personasRoutes);

export default app;
