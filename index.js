const deleteFileModule = require('./custom_modules/DeleteFile');
const readFileModule = require('./custom_modules/ReadFile');
const serverModule = require('./custom_modules/BasicServer');
const express = require('express');

const fileSystem = require("fs");

const deleteFile = new deleteFileModule.DeleteFile(fileSystem);
const readFile = new readFileModule.ReadFile(fileSystem);
const server = new serverModule.BasicServer();
const app = express();

deleteFile.delete("sample1.txt");
readFile.read("sample3.txt");

app.use(express.json());

const port = 3000;

app.get("/", server.getRequest);

app.post("/", server.postRequest);

app.put("/", server.putRequest);

app.delete("/", server.deleteRequest);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));