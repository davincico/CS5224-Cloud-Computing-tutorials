# Specify base image - lts node
FROM node:18
WORKDIR /usr/src/app
#Image has nodejs and npm pre installed, we coopy thr package.json and package-lock.json files to working dir
COPY package*.json ./
# RUN npm ci --omit=dev (uncomment if building code for production)
COPY . . 
#bundle app source code inside the docker image
EXPOSE 8080
# execute command to run app
CMD ["node", "index.js"]