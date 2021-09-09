import express from "express";
import "./database";
import { routes } from "./routes";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Running... in port 3333"));
