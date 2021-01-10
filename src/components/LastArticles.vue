<template>
<div class="general">
<Slider texto="Bienvenido al master en frameworks para Javascript" home="true"></Slider>
    <div class="center">
  <section id="content">
    <h2 class="subheader">Últimos Artículos</h2>

    <!-- listado de artículos -->
    <div id="articles">
      <Articles :articles="articles"></Articles>

    </div>
  </section>
  <Sidebar></Sidebar>
    <div class="clearfix"></div>
    </div>
    </div>
</template>

<script>

//para hacer peticiones ajax importamos axios, despues de haberle hecho npm install --save axios
import axios from "axios";
//import el Global.js para utilizar la url del api del backend
import Global from "../Global"

import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Articles from "./Articles.vue"


export default {
  name: "LastArticles",
  components: {
    Slider,
    Sidebar,
    Articles,
  },
  //cuando el componente se monte, muestro todos los articulos de nuestro backend.
  mounted() {
    this.getLastArticles();
  },
  //creamos el data, para guardar lo que me llega del api rest, en una propiedad, en este caso la llamaremos articles: []
  data() {
    return {
      url: Global.url,
      articles: [],
      
    };
  },
  //creamos nuestro metodo que va a sacar todos los articulos de nuestro backend.
  methods: {
    getLastArticles() {
      axios.get(this.url +"articles/true").then((res) => {
        if (res.data.status === "satisfactorio") {
          this.articles = res.data.articles;
        }
        console.log(this.articles);
      });
    },
  },
};
</script>