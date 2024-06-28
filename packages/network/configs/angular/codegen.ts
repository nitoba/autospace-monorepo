import type { CodegenConfig } from '@graphql-codegen/cli'

const documentsPattern = '**/*.graphql'

const plugins = [
  'typescript',
  'typescript-operations',
  'typescript-apollo-angular',
]

const config: CodegenConfig = {
  schema: '../../apps/api/src/infra/http/graphql/schema.gql',
  ignoreNoDocuments: true,
  overwrite: true,
  generates: {
    './src/gql/generated-angular.ts': {
      documents: documentsPattern,
      plugins,
    },
  },
}
export default config
