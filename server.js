<<<<<<< HEAD
const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

async function startServer() {
    try{
        await MongoDB.connect(config.db.uri);
        console.log("Connected to the database!");

        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log("Cannot connect to the database!", error);
        process.exit();
    }
}

startServer();
=======
const app = require ("./app");
 const config = require ("./app/config");
// start server
const PORT = config.app.port;
app. listen (PORT, () =>{
    console.log(` Server is running on port ${PORT}.`);
});
>>>>>>> 577f307cf374e0ef3c76f2f7c6666887b8c4a972
