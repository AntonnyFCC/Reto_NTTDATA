const personas = async (_, res) => {
    // Definir la url de la API (límite de 10 resultados)
    const urlApi = 'https://randomuser.me/api/?results=10';    

    // Realizar la petición a la API
    const response = await fetch(urlApi);

    // Comprobar si la respuesta es correcta
    if (!response.ok) {
        return res.code(500).send({ error: 'Error al obtener los datos de la API' });
    }

    // Convertir la respuesta a JSON
    const data = await response.json();

    // Enviar la respuesta al cliente en una lista
    res.code(200).send({ listPersonas: data.results });
};

export {
    personas
};
