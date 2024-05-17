# Admin-panel

## Getting started
---

### Backend

#### Requirments:
- Node.js
- PostgresSQL

1. **Clone project:**

```shell
git clone https://github.com/andriihalai/admin-panel.git
```

2. **Change directory into backend:**
```shell
cd backend
```

3. **Install all dependencies:**
```shell
npm install
```

4. **Set up environment variables.**
  Create a ```.env``` file and add proper environmental variables:

  ```shell
  DB_HOST='<host>' 
  DB_PORT='<port>'
  DB_USERNAME='<username>'
  DB_PASSWORD='<password>'
  DB_NAME='<dbname>'
  APP_PORT='<port>'
  ```

  You can find an example in the ```.env.example``` file:

  ```shell
  # This is an example for a .env file
  # DB type is postgres, check apartments.service.ts
  DB_HOST='localhost'
  DB_PORT=1111
  DB_USERNAME='username'
  DB_PASSWORD='mypassword'
  DB_NAME='mydbname'
  APP_PORT=8000
  ```

5. **Seed database:**
```shell
npm run seed
```

6. **Start project:**
```shell
npm run start:dev
```

## Api request examples

- ```GET``` Get all apartments
```
http://localhost:8000/apartments
```

- ```GET``` Get apartments with query params
```
http://localhost:8000/apartments?price=asc&&rooms=3
```

- ```GET``` Get apartment by id
**Note: apartment's id is an uuid**
```
http://localhost:8000/apartments/228880ff-0fb9-48d2-99d2-744003fe211a
```

- ```POST``` Create an apartment
```
http://localhost:8000/apartments
```

**Body ```json```**
```json
{
  "rooms": 3,
  "name": "Lorem ipsum dolor sit amet",
  "price": 950,
  "description": "Lorem ipsum dolor ipsum."
}
```

- ```DELETE``` Delete an apartment
```
http://localhost:8000/apartments/228880ff-0fb9-48d2-99d2-744003fe211a
```

- ```PUT``` Update an apartment
```
http://localhost:8000/apartments/084f0bb5-d7b1-4f94-bbc8-f18097fe366b
```
**Body ```json```**
```json
{
  "rooms": 1,
  "name": "ligula eget dolor",
  "price": 642,
  "description": "temeritas dolor vulticulus traho vado vetus annus strues terra adficio absorbeo sustineo arma"
}
```