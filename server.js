const express = require('express');
const server = express()
const routes = require("./controller/router/router.js");
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

server.set("port", process.env.PORT || 3502);

server.set ( "view engine", "ejs" );
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(routes);

server.listen(server.get("port"), () => {
    console.log("Server started on port " + server.get("port"));
    console.log(`[HOST] http://localhost:3502/`);
})