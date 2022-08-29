
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
        Tasks: [],
    },
    getters: {
        getTasks: state => {
            return state.Tasks;
        },
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
        }
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
        async deleteproject(state, deleteproject) {
            await axios.post(state.base_URL + "projects/delete", deleteproject, { headers: { 'Authorization': 'Bearer ' + cookie.get("token") } })
                .then((response) => {

                    console.log(response.data);
                    router.push({ name: "home" });
                }).catch((error) => {

                    console.log(error);
                });
        },
        async deletetask(state, deletetask) {
            console.log(deletetask)
            await axios.delete(state.base_URL + "tasks/destroy", { params: { "task_id": deletetask }, headers: { 'Authorization': 'Bearer ' + cookie.get("token") } })
                .then((response) => {

                    console.log(response.data);
                    router.push({ name: "home" });
                }).catch((error) => {

                    console.log(error);
                });
        },


        async deletephase(state, deletephase) {
            console.log("nooooo", deletephase)
            await axios.delete(state.base_URL + "phases/destroy", { params: deletephase, headers: { 'Authorization': 'Bearer ' + cookie.get("token") } })
                .then((response) => {

                    console.log(response.data);
                    router.push({ name: "home" });
                }).catch((error) => {

                    console.log(error);
                });
        },
        async bringProject(state, project) {

            const headers = {
                'Authorization': 'Bearer ' + cookie.get("token")
            }
            await axios.post(state.base_URL + "projects/show", project, { headers })
                .then((response) => {
                    state.project = response.data.project
                    state.phases = response.data.phases
                    state.Teams = response.data.teams
                    state.Tasks = response.data.tasks

                    console.log(response.data.project);
                    console.log("phase me straight into my eyes");
                    console.log(response.data.phases);
                    console.log("Team up");
                    console.log(response.data.teams);
                    console.log("Task me");
                    console.log(response.data.new);

                    // router.go(0);
                }).catch((error) => {

                    console.log(error);
                });


        },
        async addPhase(state, Phase) {
            console.log(Phase);

            await axios.post(state.base_URL + "phases/store", {
                "name": Phase.name,
                "description": Phase.description,
                "due_date": Phase.due_date,
                "project_id": Phase.projectId,
            }, { headers: { 'Authorization': 'Bearer ' + cookie.get("token") } })
                .then((response) => {

                    console.log(response);
                    router.go(0);
                }).catch((error) => {

                    console.log(error);

                });

        },
        async addTask(state, Task) {
            console.log("hola", Task.project_id);

            await axios.post(state.base_URL + "tasks/store", {

                "phase_id": Task.phaseId,
                "name": Task.name,
                "description": Task.description,
                "due_date": Task.due_date,
                "project_id": Task.project_id,

            }, { headers: { 'Authorization': 'Bearer ' + cookie.get("token") } })
                .then((response) => {

                    console.log(response.data);
                    router.go(0);
                }).catch((error) => {

                    console.log(error);
                });

        },
        async editProject(state, project) {
            await axios.post(state.base_URL + "projects/update", {
                "name": project.name,
                "description": project.description,
                "due_date": project.due_date,
                "project_id": project.id
            }, { headers: { 'Authorization': 'Bearer ' + cookie.get("token") } })
                .then((response) => {

                    console.log(response.data);
                    router.go(0);
                }).catch((error) => {

                    console.log(error);
                });
        },
        async getTeams(state) {
            console.log(state.project.teams);
            state.teams = state.project.teams;

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




        }
    },
    actions: {
        register(context, user) {
            context.commit('resetLogInErors')
            context.commit('register', user)
        },
        editProject(context, project) {

            context.commit('editProject', project);
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
        deleteproject(context, project) {
            context.commit('deleteproject', project)
        },
        deletephase(context, phase) {
            context.commit('deletephase', phase)
        },
        deletetask(context, task) {
            context.commit('deletetask', task)
        },
        addPhase(context, Phase) {
            console.log(Phase);
            context.commit('addPhase', Phase)
        },
        addTask(context, Task) {
            console.log(Task);
            context.commit('addTask', Task)
        },
        bringProject(context, project) {
            context.commit('bringProject', project)
        },
        Search(context, SerachQuery) {
            context.commit("search", SerachQuery)
        },
        getTeams() {

        }

    }
})

export default store;
