# Time Tracking App

Time-tracking-app is an Angular-based frontend application which extends an already developed backend application (available as a docker image), such that providing a user-friendly interface. 

## Build and run the application 
Since time-tracking-app depends on an already existing application provided as a docker image, firstly its (the existing docker image - the backend application) running is necessary. Once the backend application through the docker image is run, the application can be run in different ways as described below:

1. Run `ng serve` for a dev server, navigate to `http://localhost:4200/` (make sure adapting the configuration within the angular.json file by adding the following: `"proxyConfig": "src/proxy.conf.json"` - a file providing proxy configuration for the webpack-dev-server)

2. Additionally, the application can be run using the docker-compose.yml within /src directoy, such that avoiding running the forntend and backend docker images separately by using the following commnad (ensure you are within the /src directory):

    - docker-compose up

    Once the application is run, it can be accessed through a web browser by typing the following: 
    - `http://localhost:9000/`
 

