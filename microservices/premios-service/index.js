const app = require("./src/app.js");

app.listen(process.env.port || 5000, ()=>{
    console.log(`Premios service listo en el puerto ${process.env.port || 5000}`);
});