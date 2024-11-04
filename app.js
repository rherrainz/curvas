import express from "express";
import path from "path";
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const app = express();

const PORT=3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use('/', express.static(path.join(__dirname, 'public')))



app.listen(PORT,()=>{
    console.log("escuchando en el puerto: ",PORT);
})