# Init project

> Before making any changes

```
git pull https://github.com/KhachikAstoyan/salata-app.git master
```

> How to set up mongodb

`copy & paste in terminal`

```
cp .env.example .env
```

`Copy the URI provided by mongodb into the .env file`

`Example:`

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.1o8xa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

> Install packages

`npm ci is like npm install`

```
npm ci
```

> Compile files and watch them

```
npm run dev
```

> Run this command after change schema

```
npm run relay
```
