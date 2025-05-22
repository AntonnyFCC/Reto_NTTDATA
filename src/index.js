import app from "./app.js";

// Ejecutar el servidor en el puerto 3000
app.listen({ port: 3000, host: '0.0.0.0' }, (error) => {
  if (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
  console.log(`El servidor inició y está corriendo en el puerto 3000`);
});
