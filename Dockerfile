# Use an existing image as a base
FROM node:14

# Set the working directory
#WORKDIR /usr/src/app
WORKDIR /sgoinfre

# Copy the app.js file
COPY app.js .
COPY index.html .
COPY script.js .

# Expose the port that the app listens on
EXPOSE 3000

# Define the command to run the app

CMD ["node", "app.js"]

