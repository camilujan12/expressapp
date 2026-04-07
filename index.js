

//armamos el servidor de la aplicacion
//1. importamos la liibreria express para usarla 
const express = require('express');
//2.creamos una app para uso de los metodos de Express
const app = express();
function hola() {
  console.log("Hola gente")
}
//3.definimos el puerto en el que se ejecutara el servidor
const PORT = 9000; //3000 o el 8080
//4. respondemos a una peticion get a la raiz del servidor
app.get('/', (req, res) => {
  res.send('Hola Mundo desde Express en el quinto año');
});
//5.ejecutamos el servidor en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});