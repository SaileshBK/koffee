# Coffee

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Docker

From the root of our project, we can build the docker image:

`docker build -t koffee-nginx-app .`

The -t flag tags our image with the name koffee-nginx-app and . tells Docker to use the Dockerfile in current directory.

Now runnig the docker container:

`docker run -d -p 8080:80 koffee-nginx-app`

-d runs the container in detached mode (in the background).
-p 8080:80 maps port 8080 on your local machine to port 80 inside the container
