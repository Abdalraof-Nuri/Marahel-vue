
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
        phases: [],
        project: {},
        Teams: [],
        searchresult: [],
        chatList: {},
        chat: {},
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
        getProject: state => {
            return state.project
        },
        getProjectName: state => {
            return state.project.name
        },
        getPhases: state => {
            return state.phases
        },
        getTeams: state => {
            return state.Teams
        },
        getserchresult: state => {
            return state.searchresult
        },
        getChatList: state => {
            return state.chatList;
        },
        getChat: state => {
            return state.chat;
        },
    },
    mutations: {
        async register(state, user) {
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
        resetLogInErors(state) {
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
            console.log({ 'Authorization': 'Bearer ' + cookie.get("token") }),
                await axios.get(state.base_URL + "recentProjects", { headers: { 'Authorization': 'Bearer ' + cookie.get("token") } })
                    .then((response) => {
                        state.projects = response.data;
                    }).catch((error) => {

                        console.log(error);
                    });


            // console.log(this.progress[1])
        },
        async addProject(state, project) {
            console.log(project)
            await axios.post(state.base_URL + "projects/store", project, { headers: { 'Authorization': 'Bearer ' + cookie.get("token") } })
                .then((response) => {

                    console.log(response.data);
                    router.go(0);
                }).catch((error) => {

                    console.log(error);
                });


        },
        async bringProject(state, project) {

            const headers = {
                'Authorization': 'Bearer ' + cookie.get("token")
            }
            await axios.post(state.base_URL + "projects/show", project, {headers})
                .then((response) => {
                    state.project = response.data.project
                    state.phases = response.data.phases
                    state.Teams = response.data.teams

                    // router.go(0);
                }).catch((error) => {

                    console.log(error);
                });


        },
        async search(state, project_name) {
            console.log(project_name)
            await axios.get(state.base_URL + "projects/findByName", { params: project_name, headers: { 'Authorization': 'Bearer ' + cookie.get("token") } })
                .then((response) => {
                    console.log(response.data.project)
                    state.searchresult = response.data.projects;

                }).catch((error) => {
                    console.log(error);
                })




        },
        async getChatList(state){
            const headers = {
                'Authorization': 'Bearer ' + cookie.get("token")
            }
            await axios.post(state.base_URL + "chat/getChatList", {}, {headers})
                .then((response) => {
                    console.log(response.data);
                    state.chatList = response.data
                }).catch((error) => {
                    console.log(error);
                });


        },
        async loadChat(state, receiverId){
            const headers = {
                Authorization: "Bearer " + cookie.get("token"),
              };
                axios
                .post(
                  "http://127.0.0.1:8000/api/chat/getChat",
                  { receiver_id: receiverId },
                  { headers }
                )
                .then((response) => {
                    state.chat = response.data;
                  console.log(state.chat);

                });
        },

    },
    actions: {
        register(context, user) {
            context.commit('resetLogInErors')
            context.commit('register', user)
        },
        addProject(context, project) {
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
        },
        Search(context, SerachQuery) {
            context.commit("search", SerachQuery)
        },
        getChatList(context){
            context.commit('getChatList');
        },
        loadChat(context, receiverId){
            context.commit('loadChat', receiverId);
        }

    }
})

export default store;
