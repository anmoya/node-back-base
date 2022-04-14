# Install dependencies

```
yarn add express zod config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid

yarn add @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node-dev typescript -D

```

# Create a mongo db docker
(comming soon)

# Config the app
Go to `./config/renamethisfiletodefault.ts`, then config port (node app will run in that port), a dbUri pointing to your mongo db, saltFactor for JWT.
