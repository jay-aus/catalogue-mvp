# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the backend code to the working directory
COPY . .

# Set the environment variable to specify the production mode
ENV NODE_ENV=production

# Start the Node.js backend server
CMD ["npm", "start"]
