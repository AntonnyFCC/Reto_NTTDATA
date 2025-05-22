# Reto Técnico NTTDATA de ANTONNY FERNANDO CORCINO CASTILLO

El reto consistío en el desarrollo de un servicio donde se generó una lista de 10 personas.
Los datos mostrados son fotografía, nombre, género, ubicación, coreo electrónico y la fecha de nacimiento.

Se optó por un enfoque fullstack, contruyendo el propio backend (API RESTful) y servidor frontend en el framework de javascript Fastify.

Para ello se usó Node JS - v22.11.0

Una vez clonado el proyecto de github y teniendo instalado Node JS, se debe ejecutar el siguiente comando para instalar las dependencias:
```
npm i
```

Y para ejecutarlo se puede usar
```
npm run dev
```
o
```
npm run start
```

Para ingresar al frontend se debe usar el url: http://localhost:3000

El frontend hará request al backend también construído en Fastify (http://localhost:3000/personas) para obtener la información de las 10 personas.
