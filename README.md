# Vue Workshop

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

### Run with Docker at 8080 port

#### Build image with Nginx
```
docker build -t vuejs-cookbook/dockerize-vuejs-app .
```

#### Run Docker
```
docker run -it -p 8080:80 --rm --name dockerize-vuejs-app-1 vuejs-cookbook/dockerize-vuejs-app
```

### Integration with radh-ui

#### Setup library
```
npm install --save radh-ui
```

#### Set Vue config in main.ts
```
import { applyPolyfills, defineCustomElements } from 'radh-ui/dist/loader'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false

Vue.config.ignoredElements = [/radh-\w*/, /cjs-\w*/, /index-\w*/]

applyPolyfills().then(() => {
  defineCustomElements(window)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```





