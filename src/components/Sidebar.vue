<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>Puedes hacer esto</h3>
      <router-link to="/crear-articulo" class="btn btn-success">Crear Artículo</router-link>
    </div>

    <div id="search" class="sidebar-item">
      <h3>Buscador</h3>
      <p>Encuentra el artículo que buscas</p>
      <!-- defino el metodo search, el cual va a buscarme el articulo  y creamos el v-model="searchString-->
      <form action="" @submit.prevent="goSearch">
        <input type="text" name="search" id="" v-model="searchString" />
        <input type="submit" name="search" id="" value="buscar" class="btn" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  //nos creamos un data para crear la propiedad de search
  data(){
    return{
      searchString: null
    }
  },
  methods:{
    goSearch(){
      console.log(this.searchString)
      this.$router.push("/redirect/"+ this.searchString)
    }
  }
};
</script>