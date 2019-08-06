# Angular cli + Cucumber.js + Protractor

> _This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4._


Installing Development Pre-Requisites
-------------------------------------

Install [Docker](https://www.docker.com).


Installing The Project for Development
--------------------------------------

Clone the repository:

```bash
git clone git@github.com:manuerumx/angular-cucumber.git
cd angular-cucumber
```
Start the Docker Containers:

```bash
docker-compose up
```


Update your hosts file:

```bash
echo -e "\n\
127.0.0.1 my-project.local \n\
" | sudo tee -a /etc/hosts
```

## Development server

Navigate to `http://my-project.local:4201/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `docker-compose exec my-project ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `docker-compose exec my-project ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `docker-compose exec my-project ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Karma
The project is configured to run headless Chrome container by default.
But is possible to see the results of the tests, accessing the next link http://my-project.local:9876/


## Running end-to-end tests
Run `docker-compose exec my-project ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Cucumber 
The project is configured to run Chrome and Firefox as selenium nodes.

If you wish to view the browser, you can use a VNC client to connect to those containers. 
The password is `secret`. 


- Chrome `vnc://my-project.local`
- Firefox `vnc://my-project.local:5901`
