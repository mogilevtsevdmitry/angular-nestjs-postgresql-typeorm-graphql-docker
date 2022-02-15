# Angular NestJS PostgreSQL GraphQL Typeorm Docker

Простое backend приложение на базе NestJS, где в качестве базы данных выступает PostgreSQL, для управления базой
используется TypeORM, в качестве языка запроса у backend используется GraphQL. Все это упаковано в docker-compose

<table width="100%">
  <tr>
    <td align="center" valign="middle" width="17%">
      <a href="https://angular.io/">
        <img height="50" alt="Angular" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"/>
      </a>
      <br />
      Angular
    </td>
    <td align="center" valign="middle" width="17%">
      <a href="https://nestjs.com/">
        <img height="50" alt="NestJS" src="https://hsto.org/getpro/habr/post_images/d11/98b/ac8/d1198bac8e4ced0d89d5e5983061f418.png"/>
      </a>
      <br />
      NestJS
    </td>
    <td align="center" valign="middle" width="17%">
      <a href="https://www.postgresql.org/">
      <img height="50" alt="PostgresSQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"/>
      </a>
      <br />
      PostgresSQL
    </td>
    <td align="center" valign="middle" width="17%">
      <a href="https://graphql.org/">
      <img height="50" alt="GraphQL" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"/>
      </a>
      <br />
      GraphQL
    </td>
    <td align="center" valign="middle" width="17%">
      <a href="https://typeorm.io/">
      <img height="50" alt="TypeORM" src="https://www.zoneofit.com/wp-content/uploads/2021/06/type-orm.png"/>
      </a>
      <br />
      TypeORM
    </td>
    <td align="center" valign="middle" width="17%">
      <a href="https://www.docker.com/">
      <img height="50" alt="Docker" src="https://d1.awsstatic.com/acs/characters/Logos/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png"/>
      </a>
      <br />
      Docker
    </td>
  </tr>
</table>

## Метод установки и запуска

Скопируйте к себе репозиторий

```shell
git clone https://github.com/mogilevtsevdmitry/angular-nestjs-postgresql-typeorm-graphql-docker.git
```

Создайте в корне репозитория .env файл, например:

```dotenv
API_PORT=3001
API_HOST=http://localhost:
TYPEORM_CONNECTION=postgres
TYPEORM_USERNAME=admin
TYPEORM_PASSWORD=123456
TYPEORM_DATABASE=lesson1
TYPEORM_PORT=5432
TYPEORM_HOST=localhost
```

### С использованием Docker

Убедитесь что у вас установлен Docker (Docker не поддерживается семейством операционных систем Windows, за исключением
Windows-Professional или Корпоративная, т.к. для работы необходим Hyper-V, о чем сказано на сайте
в [документации](https://docs.microsoft.com/ru-ru/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v#check-requirements)
Microsoft)
Выполните команду:

```shell
docker-compose up
# -d - для запуска в фоне
# --build - для повторной пересборки контейнеров
```

### Без Docker

- Установите к себе PostgreSQL с официального [сайта](https://www.postgresql.org/)
- Создайте экземпляр сервера и базу данных, добавьте пользователя и пароль как указано в .env файле
- Убедитесь что postgreSQL запущен и работает
- Выполните установку зависимостей

### Backend
```shell
cd backend/

# yarn package manager
yarn install
yarn start

# npm package manager
npm install
npm run start
```

### Frontend
```shell
cd frontend/

# yarn package manager
yarn install
yarn start

# npm package manager
npm install
npm run start
```