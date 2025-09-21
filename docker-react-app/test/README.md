

### Setup
Within Project directory mkdir test
``` 
cd test
npm init -y
npm install express --save
npm i -g create-react-app
npm install express
```

To create the react app
```
create-react-app testapp
cd testapp
yarn start or npm start
```

For production reactJS
```
# Write the index.js
node index.js # to start
```

To build docker image for test app
- Write your Dockerfile and .dockerignore
```
docker build . -t <username>/test-web-app

docker image ls

docker run -p 12345:8080 -d davincico/test-web-app
```