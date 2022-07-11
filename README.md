# Image Processing Api Project

Commands to setup the project-
1. npm install - to install all the dependencies
2. npm run test - to run the unit tests
3. npm run start - to start the express server
4. npm run lint - for linting
5. npm run build - to build the project. This will transpile the TypeScript code to JavaScript
6. npm run prettier - for formatting

The Image Processing Api is listening on http://localhost:3000

This project has having 2 endpoints:
1. Endpoint to list all the available images
    Example - http://localhost:3000/api/images

    This will list all the images available to compress.

2. Endpoint to compress and retrieve a particular image
    Example - http://localhost:3000/api/image?filename=palmtunnel&width=200&height=200

    Through this endpoint we can pass the parameters in query string. Below are the query string parameters
    1. filename - to specify the image
    2. width - specify the desired width
    3. height - specify the desired height

The image can be only be compressed if it listed in endpoint 1 

