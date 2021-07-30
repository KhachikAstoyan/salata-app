# Project init

## [Figma mockup](https://www.figma.com/file/gvYTd9ZsGkEaEjTgtt7LyD/Untitled?node-id=0%3A1)

> Before making any changes click the button `Fetch upstream`, then `Fetch and merge` in your repo, then write in terminal:

```
git pull
```

> Or add the remote, call it "upstream":

```
git remote add upstream https://github.com/KhachikAstoyan/salata-app.git
```

> Fetch all the branches of that remote into remote-tracking branches

```
git fetch upstream
```

> Make sure that you're on your master branch:

```
git checkout master
```

> Merge branches

```
git rebase upstream/master
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

```
npm i
```

> Compile files and watch them

```
npm run dev
```

> Run this command after changing the schema

```
npm run relay
```
