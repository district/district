# District
District is an all-in-one solution for making REST APIs with the framework of your choice.

Here are the packages I plan on developing in the first iteration:
- `@district/core` - contains core application logic. This can be the only dependency for a library.
- `@district/platform-express` - contains bootstrapping logic and utilities for Express applications. It will ensure compatibility with existing Express apps and middlewares.
- `@district/mongo` - DI-compatible MongoDB implementation for District.

These three packages alone will suit most use cases for new applications.

After v1 plan:
- `@district/platform-hapi` - support HapiJS
- `@district/platform-sails` - support SailsJS
- `@district/platform-koa` - support Koa
- `@district/postgres` - DB wrapper for PostgreSQL
- `@district/mysql` - DB wrapper for PostgreSQL
- `@district/mongoose` - DB wrapper for Mongoose
- `@district/http` - http request wrapper to other APIs
- `@distict/testing` - testing utilities for District apps

Note to self - DB Providers need to be mockable
