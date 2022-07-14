<template>
   <navBar/>



<section style="margin-top:80px" class="board-info-bar">



		
			<h2 style="color:black">{{this.store.getters.getProject.name}}</h2>
           
		

		

	

</section>
<!-- End of board info bar -->

<!-- Lists container -->
<section class="lists-container card-container">

	<div class="card  list" v-for="Phases in store.getters.getPhases" :key="Phases.id">
            

		<h3 class="list-title">{{Phases.name}}</h3>

		<ul class="list-items">
			<li v-for="Phases in store.getters.getPhases" :key="Phases.id">
            {{Phases.name}}
            </li>
		</ul>

		<button class="add-card-btn btn">Add a card</button>

	</div>

	
	

</section>
 
</template>

<script>

import navBar from "./navBar-view.vue"
import { useStore } from "vuex";
export default {
  components:{navBar},
  data() {
    return {
      store: useStore(),
      project: {},
    //  proj:this.store.getters.getProject,


    };
  },

  mounted() {
    
    this.store.dispatch("bringProject", {"project_id": parseInt(this.$route.query.id) })
    this.project = this.store.getters.getproject
   console.log(this.project)
  },
  computed: {
    getProject(){
        return this.project
    }
  }
 
};
</script>

<style scoped>

.board-info-bar {
    flex-basis: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.8rem 0;
    padding: 0 1rem;
    padding-bottom: 2em;
    color: #f6f6f6;
    border-bottom:  0.1rem solid #ccc;
    width: 35%;
}












/* Lists */

.lists-container::-webkit-scrollbar {
    height: 1rem;
}

.lists-container::-webkit-scrollbar-thumb {
    background-color: #303c43;
    border: 0.8rem solid #444e54;
    border-top-width: 0.8;
    border-radius: 3rem;
}

.lists-container {
    display: flex;
    align-items: start;
    padding: 0 0.8rem 0.8rem;
    overflow-x: auto;
    height: calc(100vh - 8.6rem);
}

.list {
    margin-top: 2em;
    flex: 0 0 27rem;
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    max-height: calc(80vh - 5rem);
    border-radius: 0.5rem;
    margin-right: 2rem;
}
/* 
.list:last-of-type {
    margin-right: 0;
} */

.list-title {
    font-size: 1.4rem;
    font-weight: 700;
    color: #333;
    padding: 1rem;
}

.list-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-content: start;
    padding: 0 0.6rem 0.5rem;
    overflow-y: auto;
    border: black;
}

.list-items::-webkit-scrollbar {
    width: 1.6rem;
}

.list-items::-webkit-scrollbar-thumb {
    background-color: #c4c9cc;
    border-right: 0.6rem solid #e2e4e6;
}

.list-items li {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.3;
    background-color: #fff;
    padding: 0.65rem 0.6rem;
    color: #4d4d4d;
    border: 0.1rem solid #ccc;
    border-radius: 0.3rem;
    margin-bottom: 0.6rem;
    word-wrap: break-word;
    cursor: pointer;
}

.list-items li:last-of-type {
    margin-bottom: 0;
}
/* 
.list-items li:hover {
    background-color: #eee;
} */

.add-card-btn {
    display: block;
    font-size: 1.4rem;
    font-weight: 400;
    color: #838c91;
    padding: 1rem;
    text-align: left;
    cursor: pointer;
}

.add-card-btn:hover {
    background-color: #755dc9;
    color: white    ;
    text-decoration: underline;
}




</style>


 
