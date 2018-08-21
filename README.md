# :eyes:

A meme of writing something like sentry.io but js + mongo

## TODO

- Authentication (probably just github oauth? maybe auth0 for memes?)
- Literally all of the frontend
- Decide on a final format for events

## Setting up a test env

```Bash
docker run --rm -dit -p 27017:27017 --name=mongo -e MONGO_INITDB_DATABASE="eyes" \
    -e MONGO_INITDB_ROOT_USERNAME="eyes" -e MONGO_INITDB_ROOT_PASSWORD="eyes" mongo:latest
# Connect with mongo shell if desired
mongo --username eyes --password --authenticationDatabase admin
# Start server and client
env MONGO_CONNECTION_STRING="mongodb://eyes:eyes@localhost:27017/eyes?authSource=admin" PORT=8192 yarn dev
```
