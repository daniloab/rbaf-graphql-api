import dotenv from "dotenv";
import { createServer } from "http";
import log4js from "./shared/logger";

import app from "./server/app";
import initDB from "./database/database";
import { environment, serverConf } from "./shared/index";

var logger = log4js.getLogger();

(async () => {
  dotenv.config();
  // starting db
  try {
    await initDB();
  } catch (error) {
    console.error("Unable to connect to database");
    process.exit(1);
  }

  const server = createServer(app.callback());

  server.listen(process.env.PORT, () => {
    logger.info("##########################################################");
    logger.info("#####               STARTING SERVER                  #####");
    logger.info("##########################################################\n");
    logger.info(
      `App running on ${environment.toUpperCase()} mode and listening on port ${
        serverConf.SERVER_PORT
      } ...`
    );
    logger.info(
      `GraphQL Server is now running on http://localhost:${process.env.PORT}/graphql`
    );
  });
})();
