
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://sa-east-1.cdn.hygraph.com/content/clmevqucb04mu01tf3fztg9ak/master',
  documents: "src/graphql/queries.ts",
  ignoreNoDocuments: true,
  generates: {
    "src/graphql/generate/": {
      preset: "client",
    }
  }
};

export default config;
