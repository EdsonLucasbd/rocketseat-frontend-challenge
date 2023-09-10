
import type { CodegenConfig } from '@graphql-codegen/cli';

const baseUrl = process.env.NEXT_PUBLIC_API_URL

const config: CodegenConfig = {
  overwrite: true,
  schema: `${baseUrl}:3333/graphql`,
  documents: "src/graphql/queries.ts",
  ignoreNoDocuments: true,
  generates: {
    "src/graphql/generate/": {
      preset: "client",
    }
  }
};

export default config;
