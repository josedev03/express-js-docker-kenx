# express-js-docker-kenx
API REST - docker compose, knex (mysql), migrations, seeds

### Knex useful commands

- Create migration file:
```
npx knex migrate:make <operation_table_name> --env db
```

- Create seed file:
```
npx knex seed:make <operation_table_name> --env db
```