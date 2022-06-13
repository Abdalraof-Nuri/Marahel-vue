
import { createStore } from 'vuex';
import axios from 'axios'
import cookie from 'vue-cookies'
import router from '../router/index.js'


// axios.defaults.withCredentials = true; 
axios.defaults.headers.common['Authorization'] = cookie.get("token");
const store = createStore({

    state: {
        base_URL: 'http://127.0.0.1:8000/api/',
        logedInUser: {},
        logInErrors: {},
        projects: {
            userProjects: [],
            assignedProjects: [],
        },
        allProjects: [],
        phases: {},
    },
    getters: {
        getLogedInUser() {
            return cookie.get('user')
        },
        getLogInErrors: state => {
            return state.logInErrors.message
        },
        getLogOutMessage: state => {
            return state.logoutMessage
        },
        getUserProjects: state => {
            return state.projects.userProjects
        },
        getAssignedProjects: state => {
            return state.projects.assignedProjects
        },
        getAllProjects: state => {
            return state.allProjects = state.projects.userProjects.concat(state.projects.assignedProjects);
        },
    },
    mutations: {
        async register(state, user){
            if (user.email === '' || user.password === '' || user.name === '' || user.password_confirmation === '') {
                state.logInErrors.message = 'All Fields are required'

           } else {
               await axios.post(state.base_URL + "register/", user)
                   .then((response) => {
                       cookie.set('user', JSON.stringify(response.data.user));
                       state.logedInUser = response.data.user
                       console.log(response.data.user)
                       cookie.set("token", response.data.token, "7d");

                       console.log(state.logedInUser)
                       console.log(cookie.get("token"))
                       router.push({ name: 'home' })

                   }).catch((error) => {
                       state.logInErrors = error.response.data
                       console.log(error);
                   });
           }


        },
        resetLogInErors(state){
            state.logInErrors = {}
        },
        async logIn(state, user) {
            if (user.email === '' || user.password === '') {
                 state.logInErrors.message = 'All Fields are required'

            } else {
                await axios.post(state.base_URL + "logIn/", user)
                    .then((response) => {

                        cookie.set('user', JSON.stringify(response.data.user));
                        state.logedInUser = response.data.user
                        console.log(response.data.user)
                        cookie.set("token", response.data.token, "7d");

                        console.log(state.logedInUser)
                        console.log(cookie.get("token"))
                        router.push({ name: 'home' })

                    }).catch((error) => {
                        state.logInErrors = error.response.data
                        console.log(error);
                    });
            }


        },
        async logOut(state) {

            // const config = {
            //     headers: { Authorization: `Bearer ${state.logedInUser.token}` }
            // };


            console.log(cookie.get("token"))

            await axios.get(state.base_URL + "logOut/", { headers: { 'Authorization': 'Bearer ' + cookie.get("token") } })
                .then((response) => {
                    state.logoutMessage = response.data.message
                    // state.logedInUser = {}
                    cookie.remove("token")
                    cookie.remove("user")

                    router.push({ name: 'home' })

                }).catch((error) => {

                    console.log(error);
                });

        },
        async newProjects(state) {
            await axios.get(state.base_URL + "recentProjects", { headers: { 'Authorization': 'Bearer ' + cookie.get("token") } })
                .then((response) => {
                    state.projects = response.data;
                }).catch((error) => {

                    console.log(error);
                });


            // console.log(this.progress[1])
        },
        async addProject(state, project){
            console.log(project)
            await axios.post(state.base_URL + "projects/store", project, { headers: { 'Authorization': 'Bearer ' + cookie.get("token") } })
            .then((response) => {
                
                console.log(response.data);
                router.go(0);
            }).catch((error) => {

                console.log(error);
            });


        },
        async bringProject(state, project){
            console.log(project)

            await axios.post(state.base_URL + "projects/show", project, { headers: { 'Authorization': 'Bearer ' + cookie.get("token") } } )
            .then((response) => {
                
                console.log(response.data);
                // router.go(0);
            }).catch((error) => {

                console.log(error);
            });


        }
    },
    actions: {
        register(context, user){
            context.commit('resetLogInErors')
            context.commit('register', user)
        },
        addProject(context, project){
            context.commit('addProject', project)
        },
        logIn(context, user) {
            context.commit('resetLogInErors')
            context.commit('logIn', user)
        },
        logOut(context) {
            context.commit('logOut')
        },
        newProjects(context) {
            context.commit('newProjects')
        },
        bringProject(context, project) {
            context.commit('bringProject', project)
        }

    }
})

export default store;
