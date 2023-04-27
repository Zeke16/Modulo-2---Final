const app = require("./src/app.js");

app.listen(process.env.port || 4000, ()=>{
    console.log(`Razas service listo en el puerto ${process.env.port || 4000}`);
});