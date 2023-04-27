const app = require("./src/app.js");

app.listen(process.env.port || 3000, ()=>{
    console.log(`Perros service listo en el puerto ${process.env.port || 3000}`);
});