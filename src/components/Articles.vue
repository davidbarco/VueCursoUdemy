<template>
<section id="articles-component">

<div id="articles-list" v-if="articles && articles.length >=1">
  <article
    class="article-item"
    v-for="article of articles"
    v-bind:key="article._id"
  >
    <div class="image-wrap">
      <img
        class="imagenPelicula"
        :src="url + 'get-image/' + article.image"
        :alt="article.title"
        v-if="article.image"
      />

      <!-- condicion para cuando el articulo no tenga ninguna imagen -->
      <img
        class="imagenPelicula"
        src="../assets/images/avatar.png"
        :alt="article.title"
        v-if="!article.image"
      />
    </div>
    <h2>{{ article.title }}</h2>
    <span class="date">{{ article.date | moment('from','now')}}</span>
    
    <!-- para redireccionar a la ruta de article/id de cada articulo. -->
    <router-link :to="{name: 'article', params:{id: article._id}}">
    Leer Más
    </router-link>
    
    
    <div class="clearfix"></div>
  </article>
  </div>
  
  <!-- condicion para cuando no hayna articulo para mostar y para cuando esté cargando. -->
  <div v-else-if="articles && articles.length <1">
    No hay articulos para mostrar
  </div>

  <div v-else>
    Cargando...
  </div>
  </section>
</template>

<script>

//import el Global.js para utilizar la url del api del backend
import Global from "../Global"

export default {
  name: "Articles",
  //recibo porps desde el blog.vue
  props:[
      "articles"
  ],
  data() {
    return {
      url: Global.url,
    };
  },
};
</script>

