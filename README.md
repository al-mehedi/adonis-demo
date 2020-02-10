# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

## API Endpoints

All of the following endpoints supports GET, POST, PUT/PATCH, and DELETE; HTTP verbs.
Any endpoints should be accessible by - 192.168.0.117:3333/api/v1/endpoints_name

### Client

To **CREATE** a new client:

URL: *192.168.0.117:3333/api/v1/clients*

```json
{
    "fullname": "John Doe",
    "username": "john_doe",
    "email": "john@xyz.com"
}
```

*NOTE: Any of the above fields should not be null, username and email should be unique.*
*IMPORTANT: Data validation and duplication is not implemented at backend!*

To **GET** all existing clients:

URL: *192.168.0.117:3333/api/v1/clients*

To **GET** individual clients:

URL: *192.168.0.117:3333/api/v1/clients/:id*

e.g. *192.168.0.117:3333/api/v1/clients/1*

To **UPDATE** a clients:

URL: *192.168.0.117:3333/api/v1/clients/:id*

e.g. *192.168.0.117:3333/api/v1/clients/1*

```json
{
    "email": "john@others.com"
}
```

To **DELETE** a clients:

URL: *192.168.0.117:3333/api/v1/clients/:id*

e.g. *192.168.0.117:3333/api/v1/clients/1*

### Project

To **CREATE** a new project:

URL: *192.168.0.117:3333/api/v1/projects*

```json
{
    "title": "Nut Job",
    "description": "Prestigious Mr. squirrel who is on a quest of finding the nut.",
    "client_id": 1
}
```

*NOTE: title and client_id should not be null*

To **GET** all existing projects:

URL: *192.168.0.117:3333/api/v1/projects*

To **GET** individual projects:

URL: *192.168.0.117:3333/api/v1/projects/:id*

e.g. *192.168.0.117:3333/api/v1/projects/1*

To **UPDATE** a project:

URL: *192.168.0.117:3333/api/v1/projects/:id*

e.g. *192.168.0.117:3333/api/v1/projects/1*

```json
{
    "description": "What I was thinking..."
}
```

To **DELETE** a project:

URL: *192.168.0.117:3333/api/v1/projects/:id*

e.g. *192.168.0.117:3333/api/v1/projects/1*

### Task

To **CREATE** a new task:

URL: *192.168.0.117:3333/api/v1/tasks*

```json
{
    "title": "Find the nuts",
    "description": "Preparing for the winter!",
    "project_id": 1
}
```

*NOTE: title and project_id should not be null*

To **GET** all existing tasks:

URL: *192.168.0.117:3333/api/v1/tasks*

To **GET** individual tasks:

URL: *192.168.0.117:3333/api/v1/tasks/:id*

e.g. *192.168.0.117:3333/api/v1/tasks/1*

To **UPDATE** a task:

URL: *192.168.0.117:3333/api/v1/tasks/:id*

e.g. *192.168.0.117:3333/api/v1/tasks/1*

```json
{
    "description": "The winter has come."
}
```

To **DELETE** a task:

URL: *192.168.0.117:3333/api/v1/tasks/:id*

e.g. *192.168.0.117:3333/api/v1/tasks/1*