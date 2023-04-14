
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3333/graphql",
  documents: "src/graphql/queries.ts",
  ignoreNoDocuments: true,
  generates: {
    "src/graphql/generate/": {
      preset: "client",
    }
  }
};

export default config;
