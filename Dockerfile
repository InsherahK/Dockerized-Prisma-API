# Use an official Node.js runtime as a parent image
FROM node:18-slim



RUN apt-get update -y && apt-get install -y openssl

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .


#RUN npx prisma generate


# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
#CMD ["npm", "start"]
