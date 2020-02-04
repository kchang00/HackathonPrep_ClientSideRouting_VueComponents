// 2. create components we can request and render
let SplashComponent = {
    template: `<h1>Welcome to my Super Awesome App!</h1>`
}

let AppComponent = {
    template: `<h1>This is the app page</h1>`
}

let ErrorComponent = {
    template: `<h1>That page doesn't exist</h1>`
}

// 3. like Express Routes -> router.get ('/', ...) and do something with the request
//    create routes inside
//    order of paths is important! - Vue tries to match the routes to components from the top down
//    the wildcard must be last
const routes = [
    { path: '/', name: 'splash', component: SplashComponent },
    { path: '/app', name: 'app', component: AppComponent },
    { path: '*', name: 'error', component: ErrorComponent }
]

// 4. Catch the route and render the component into router-view in index.html
const router = new VueRouter({
    routes // shorthand for routes: routes
})

// 1. create the vue module
const vm = new Vue({
    data: {

    },

    methods: {

    },

    router
}).$mount("#app");