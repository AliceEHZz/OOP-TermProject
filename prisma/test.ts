import { PrismaDBClient } from "../src/prismaClient";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const port = 3000;

app.get("/", async (req, res) => {
  const prismaDB = PrismaDBClient.getInstance();
  const users = await prismaDB.user.findUnique({ where: { email: "gates@gmail.com" } });
  console.log(users);
  res.json(users);
});

app.listen(port, () => {
  console.log("Node application listening on port " + port);
});
