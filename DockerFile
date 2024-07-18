# Use the official Node.js image as the base image
FROM node:16-alpine as build

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular application
RUN npm run build -- --prod

# Use the official Nginx image to serve the Angular application
FROM nginx:alpine

# Copy the build output to the Nginx HTML directory
COPY --from=build /app/dist/ui-testing /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
