# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the frontend code to the working directory
COPY . .

# Build the React application for production
RUN npm run build

# Set the environment variable to specify the production mode
ENV NODE_ENV=production

# Start a simple server to serve the built static files
CMD ["npx", "serve", "-s", "build"]
