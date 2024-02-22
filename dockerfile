# Use an official Node.js image as a base image with Node.js 20
FROM node:20-alpine AS development
ENV NODE_ENV development
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .


# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the entire project to the working directory
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
