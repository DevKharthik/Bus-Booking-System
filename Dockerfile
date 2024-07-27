# Use the official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Install git
RUN apt-get update && apt-get install -y git

# Clone the repository
RUN git clone https://github.com/DevKharthik/Bus-Booking-System.git .

# Install dependencies
RUN npm install

