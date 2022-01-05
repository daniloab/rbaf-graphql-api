import fs from "fs";
import path from "path";
import { promisify } from "util";

import { printSchema } from "graphql/utilities";

import { schema as schemaGraphql } from "../src/server/schema";

const writeFileAsync = promisify(fs.writeFile);

const cwd = process.cwd();

(async () => {
  const configs = [
    {
      schema: schemaGraphql,
      path: path.join(cwd, `./schema.graphql`),
    },
  ];

  await Promise.all([
    ...configs.map(async (config) => {
      await writeFileAsync(config.path, printSchema(config.schema));
    }),
  ]);

  process.exit(0);
})();
