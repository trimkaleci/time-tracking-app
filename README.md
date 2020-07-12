# Time Tracking App

Time-tracking-app is an Angular-based frontend application which extends an already developed backend application (available as a docker image), such that providing a user-friendly interface. 

## Build and run the application 
Since time-tracking-app depends on an already existing application provided as a docker image, firstly its (the existing docker image - the backend application) running is necessary. Once the backend application through the docker image is run, the application can be run in different ways as described below:

1. Run `ng serve` for a dev server, navigate to `http://localhost:4200/` (make sure adapting the configuration within the angular.json file by adding the following: `"proxyConfig": "src/proxy.conf.json"` - a file providing proxy configuration for the webpack-dev-server)

2. The second approach of running the application is by creating a docker image from the provided Dockerfile within the root directory. In order to create the docker image, please run the following command:

- docker build -t angular-app .

Once the image is built, please run the next command as shown below (an interactive-based approach):

- docker run -it --rm -p 9000:80 angular-app 

Note: Both approaches require running firstly the dockerized backend application. 

3. Additionally, the application can be run using the docker-compose.yml within /src directoy, such that avoiding running the forntend and backend docker images separately by using the following commnad:

- docker-compose up

Once the application is run, it can be accessed through a web browser by typing the following: 
- `http://localhost:9000/`
 

