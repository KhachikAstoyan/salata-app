![Salata Icon](./client/public/salata.png)

A web app to order salads

## Preview

![Add Order](./readme_files/Web%20capture_30-9-2021_213021_localhost.jpeg)

![Orders](./readme_files/Web%20capture_30-9-2021_214010_localhost.jpeg)

<!-- ### [Figma mockup](https://www.figma.com/file/gvYTd9ZsGkEaEjTgtt7LyD/Untitled?node-id=0%3A1)

### [Miro whiteboard](https://miro.com/app/board/o9J_l1_sK4M=/) -->

## Requirements

- Node.js 16.10.0 (latest)
- git-scm

## Installation

- Clone Repository

```
// clone
git clone https://github.com/KhachikAstoyan/salata-app.git
// move to directory
cd salata-app
```

- Install Backend

```
// install packages
cd backend
npm install
```

- Setup Environment Variables

```
// copy .env file
cp .env.example .env
```

_Copy the URI provided by mongodb into the .env file_

e.g. `MONGO_URI=<YOUR MONGODB URI GOES HERE>`

- Create Google Cloud Account
- Enable Speech-to-Text API
- Pass Credentials

e.g `GOOGLE_APPLICATION_CREDENTIALS=<GCP CREDENTIALS PATH>`

_You can find information [here](https://cloud.google.com/docs/authentication/production)_

<p><em><code style="color:#D0342C">if you install app locally, the old orders&#39; speech will not work</code></em></p>

- Run Backend

```
npm run dev
```

- Install Frontend

```
cd client
npm install
```

- Run Frontend

```
npm run start
```

## Technologies

<img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" style="display: inline;" alt="drawing" width="50"/><img src="https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" style="display: inline;" alt="drawing" width="50" height="50"/><img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" style="display:inline;"  alt="drawing" width="50" height="50"/><img src="https://cdn.worldvectorlogo.com/logos/graphql.svg" style="display:inline;"  alt="drawing" width="50"/><img src="https://cdn.worldvectorlogo.com/logos/apollo-graphql-compact.svg" alt="drawing" width="50"/><img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="drawing" width="50"/><img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" alt="drawing" width="50" height="50"/>
