
import {createStore} from 'vuex';
import  axios from 'axios'
import cookie from 'vue-cookies'
import router from '../router/index.js'
import { setTimeout } from 'core-js';

// axios.defaults.withCredentials = true; 

const store = createStore({
   
    state: {
        base_URL: 'http://127.0.0.1:8000/api/',

        logedInUser: {
            
        },
        logInErrors: {
            'message': ''
        },
        projects: {
            userProjects: [],
            assignedProjects: [],
        },
        allProjects: [],
        phases: {},
        isLogedin: 0
    },
    getters: {
        
        getLogedInUser: state => {
            return state.logedInUser
        },
        getLogedInUserName: state => {
            return state.logedInUser
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
            return  state.allProjects= state.projects.userProjects.concat(state.projects.assignedProjects); 
        },

        



    },
    mutations: {
        async logIn(state, user){
            if(user.email === '' || user.password === ''){
                state.logInErrors = 'All Fields are required'
                
            }else{
                user = {
                    "email": user.email,
                    "password": user.password
                }
              try {
              let res = await axios.post(
                state.base_URL + "logIn/", user
              );
              
        // getting loged in user and setting cookies

            cookie.set('user', JSON.stringify(res.data.user));
            state.logedInUser = res.data.user.name
                console.log(res.data.user)
            cookie.set("token", res.data.token, "7d");
            
            console.log(state.logedInUser)
            console.log(cookie.get("token"))
            
            
            } catch (error) {
                
                if (error.response) {
                    state.logInErrors = error.response.data
                    // console.log(state.logInErrors)
                }

                }
            }
         
            
        },
        async logOut(state){

            // const config = {
            //     headers: { Authorization: `Bearer ${state.logedInUser.token}` }
            // };


            console.log(cookie.get("token"))
            try {
                let res = await axios.get(
                  state.base_URL + "logOut/" , {headers: {'Authorization': 'Bearer ' + cookie.get("token")}}
                );

            state.logoutMessage = res.data.message
            // state.logedInUser = {}
            cookie.remove("token")
            cookie.remove("user")

            }catch(error){
                console.log(error)
            }
            

        },
        async newProjects(state){
            
            try {
                let res = await axios.get(state.base_URL + "recentProjects", {headers: {'Authorization': 'Bearer ' + cookie.get("token")}});
                state.projects = res.data;
              } catch (error) {
                console.log(error);
              }
          
              // console.log(this.progress[1])
        }
    },
    actions: {
        logIn (context, user) {
            context.commit('logIn', user)
            
        setTimeout(() => {
            if(cookie.get('token')){
                
                router.push({ name: 'home'})
            }
            
         }, 5000)

          },
        logOut (context) {
            context.commit('logOut')
            setTimeout(() => {
                if(!cookie.get('token')){
                    router.push({ name: 'login-rigister'})
                }
             }, 5000)
          },
        newProjects (context) {
            context.commit('newProjects')
          },

    }
})

export default store;
