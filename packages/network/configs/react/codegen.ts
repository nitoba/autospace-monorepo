import type { CodegenConfig } from '@graphql-codegen/cli'

const documentsPattern = '**/*.graphql'

const plugins = [
  'typescript',
  'typescript-operations',
  'named-operations-object',
  'typed-document-node',
]

const config: CodegenConfig = {
  schema: '../../apps/api/src/infra/http/graphql/schema.gql',
  ignoreNoDocuments: true,
  overwrite: true,
  generates: {
    './src/gql/generated.tsx': {
      documents: documentsPattern,
      plugins,
    },
  },
}
export default config
