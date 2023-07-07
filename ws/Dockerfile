# Use a base image
FROM node:14

# Set the working directory
WORKDIR /app

# Install websocket server
RUN npm install ws

# Copy application code to container
COPY /app .

# Expose port 
EXPOSE 8080

# CMD to run application
CMD ["node", "server.js"]
