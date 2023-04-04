import express from "express";
import path from "path";
import session from "express-session";
import morgan from "morgan";
import RedisStore from "connect-redis";
import { createClient } from "redis";
import * as dotenv from "dotenv";
dotenv.config();
import process from "node:process";

const MemoryStore = require("memorystore")(session);

// Initialize client.
let redisClient = createClient({
  password: process.env.REDIS_PASSWORD || "",
  socket: {
    host: process.env.REDIS_HOST || "",
    port: Number(process.env.REDIS_PORT),
  },
});

redisClient.connect().catch(console.error); //https://github.com/tj/connect-redis

redisClient.on("error", (err) => console.log("Redis Client Error", err));

// redisClient.connect(); //https://github.com/redis/node-redis

// Initialize store types
let redisStore = new RedisStore({
  client: redisClient,
});

let memoryStore = new MemoryStore({
  checkPeriod: 86400000, // prune expired entries every 24h
});

module.exports = (app) => {
  // Static File Serving and Post Body Parsing
  app.use(express.static(path.join(__dirname, "..", "public")));
  app.use(express.urlencoded({ extended: true }));
  app.set("views", path.join(__dirname, "..", "areas"));
  app.set("view engine", "ejs");

  // Logging Middleware
  app.use(morgan("tiny"));

  // Session Configuration
  app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
      },
      store: redisStore, // or memory store
    })
  );
};
