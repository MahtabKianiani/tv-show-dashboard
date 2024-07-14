# tv-show-dashboard

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Architecutre

The project has been broken up into three different sections for separation of concerns:

1- TvMazeService, working as a repository, calling the APIs and getting back the results. Axios has been used as the http client.

2- Vue default state management, for keeping the state, and accessing the APIs if needed.

3- Templates for the views.

Also, alongside these layers, the UI has been broken down into different components, which handle smaller parts of presentation on each screen.

### Screens

There are three screens for this project, `HomeView`, `SearchView` and `ShowDetails`. 

Each screen is corespondant to one functionality of the project, and different components have been used in each screen. 
Also, some components have been re-used, such as show component, to display the shows both on search and home screen.

# Versions

- Node version: 20.11.0
- Vue version: 3.2.13
- NPM version: 10.2.4
