import path from "path";
import { fileURLToPath } from 'url';
import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import personasRoutes from "./api/v1/routes/personas.router.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = fastify({
    logger: true,
});

// Registrar plugins
app.register(fastifyCors, {
    origin: "*",
});

app.register(fastifyStatic, {
    root: path.join(__dirname, 'api/v1/views'),
    prefix: '/',
});

// Registrar ruta de personas
app.register(personasRoutes);

app.get('/', (_, res) => {
    res.sendFile('index.html');
});

export default app;
