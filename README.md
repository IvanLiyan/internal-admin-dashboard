# Quick Start
```
nvm install
yarn setup
yarn codegen
```

Create `.env.local` with the following content
```
NEXT_PUBLIC_MD_URL=https://staging.merchant.wish.com
NEXT_PUBLIC_USERNAME=your-wish-username
NEXT_PUBLIC_PASSWORD=your-wish-password
```

In a separate shell, run
```
nvm use
yarn dev
```
then follow the prompt to log in at https://leopard-internal.corp.contextlogic.com/internal-admin/dev-login.

Once logged in, pages can be accessed at for example https://leopard-internal.corp.contextlogic.com/internal-admin/infractions/requires-review.

# Working with GraphQL

This repo uses [urql](https://github.com/urql-graphql/urql) with [GraphQL Code Generator](https://the-guild.dev/graphql/codegen/plugins/presets/preset-client) to provide automatic schema-checking and type-checking everywhere GQLs are involved.

Run the following during development to ensure TypeScript types are regenerated as needed:
```
yarn codegen
```
This starting a process to watch for code changes, and regenerate the GraphQL schema & query types on-the-fly. It will also notify you if any queries contains errors (e.g. misspelled field name).

When adding a new GQL query/mutation, define it like so:

```javascript
import { graphql } from "@schema/gql";

export const MyQuery = graphql(`
  query MyQuery {
    ...
  }
`);
```

Note the import for `graphql` here is from `"@schema/gql"`.
