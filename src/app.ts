import express from "express";

import config from "config";

import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";

import { deserializeUser } from './middleware/deserializeUser'
import { requireUser } from "./middleware/requireUser";

const PORT = config.get<number>("port");

const app = express();

app.use(express.json());
app.use(deserializeUser);

app.listen(PORT, async () => {
  logger.info(`App is running at localhost:${PORT}`);
  await connect();
  routes(app);
});
