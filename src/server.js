const express = require('express');
const connection = require('./dataBase/connection');
const inventoryRouter = require('./Router/InventoryRouter.js');

const app = express();
const port = process.env.PORT || 1338;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// routers 

connection.sync()
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(port, () => {
            console.log(`La aplicación está corriendo en el puerto ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error al sincronizar la base de datos:', error);
    });

app.use('/api', inventoryRouter);
