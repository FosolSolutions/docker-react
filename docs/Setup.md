# Setup

## Create React App

More information [here](https://reactjs.org/docs/create-a-new-react-app.html).

```bash
npx create-react-app {app name}
```

## Node Docker

The default docker images will update automatically when changes are made to the `/src`.

To build the docker image.

```bash
docker build -t {image name} .
# or
docker-compose build
```

To run the docker image.

```bash
docker run {image name}
# or
docker-compose up -d
```

## Nginx Docker

A production docker image using Nginx serving compiled static React files.

To build the docker image.

```bash
docker build -t {image name} -f Dockerfile.nginx .
# or
docker-compose -f docker-compose.nginx.yaml build
```

To run the docker image.

```bash
docker run -p 3000:8080 {image name}
# or
docker-compose -f docker-compose.nginx.yaml up -d
```

## Scripts

There a scripts to help setup and maintain the docker containers.

| Name    | Command                    | Description                                                                                                             |
| ------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Rebuild | `./scripts/rebuild.sh`     | Rebuild and refresh the volumes containing the `node_modules`. This is required when the `package.json` is modified.    |
| Rebuild | `./scripts/rebuild-app.sh` | Rebuild and refresh the app volume containing the `node_modules`. This is required when the `package.json` is modified. |
| Rebuild | `./scripts/rebuild-api.sh` | Rebuild and refresh the api volume containing the `node_modules`. This is required when the `package.json` is modified. |
