const app = require('./app.js');
const { Config } = require('./config/config.js');

app.listen(Config.PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${Config.PORT}`);
});