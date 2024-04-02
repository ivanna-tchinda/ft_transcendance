# Use an existing image as a base
FROM node:14

# Set the working directory
#WORKDIR /usr/src/app
WORKDIR /sgoinfre
RUN npm install


# Copy the app.js file
COPY . .
COPY .htaccess .

# Expose the port that the app listens on
EXPOSE 8000

# Define the command to run the app

CMD ["node", "app.js"]

