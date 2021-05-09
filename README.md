# Server Base - Proyecto ONG

## Envinroment setup

1. Create database
2. Copy .env.example to .env and fill with database credentials.

To install dependencies, run

```bash
npm install
```

3. Migrations:

```bash
npx sequelize-cli db:migrate
```

4. Seeders:

```bash
npx sequelize-cli db:seed:all
```

## Start local server

```bash
npm start
```

## User data in Database

```

1. Populate your database with Users Data:

npx sequelize-cli db:seed --seed  20210323201915-test-users.js

2. Admin users have the following data:

- Username are like this "Usuario1", "Usuario2", "Usuario3"...
- Email: "adminUser1@test.com" for "Usuario1", "adminUser2@test.com" for "Usuario2" ...
- Password: 123456

3. Regular users have the following data:

- Username are like this "UsuarioRegular1", "UsuarioRegular2", "UsuarioRegular3"...
- Email: "regularUser1@test.com" for "UsuarioRegular1", "regularUser2@test.com" for "UsuarioRegular2", "regularUser3@test.com" for "UsuarioRegular3" ...
- Password: 123456

```