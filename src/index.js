const express = require("express");
const { handleErrors, AppError } = require("./helpers/error");
const { sequelize } = require("./models");

const app = express();
app.use(express.json());

sequelize.sync({alter: true});

const v1 = require("./routers/v1");
app.use("/api/v1", v1);



app.use(handleErrors);

app.listen(4000);