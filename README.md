# Time Tracking App

Time-tracking-app is an Angular-based frontend application which extends an already developed backend application (available as a docker image), such that providing a user-friendly interface. 

## Build and run the application 
Since time-tracking-app depends on an already existing application provided as a docker image, firstly its running is necessary - running the docker image available. Once the docker image is run, the following step shoud be followed:

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The second approach of running the app is by creating a docker image from the provided Dockerfile within the root directory. In order to create the docker image, please run the following command:

- docker build -t angular-app .

Once the image built, please run the next command as shown below (an interactive-based approach):

- docker run -it --rm -p 9000:80 angular-app 

Note: Both approaches require running firstly the dockerized backend application. 

Additionally, the application can be run using the docker-compose.yml within /src directoy, such that avoiding running the forntend and backend docker images separately by using the following commnad:

- docker-compose up
 
