#BaseFile
FROM node:21-alpine
#working directory
WORKDIR /app
#copy package.json file
COPY package.json .
#install the files
RUN npm install
#copy all files
COPY . .
#expose the port
EXPOSE 5174
#run the script
CMD [ "npm","run","dev" ]