<template>
  <div class="general">
    <!-- props. texto="blog" coloco una props en el componente del slider, luego me voy al slider y recibo esa props-->
    <Slider texto="blog"></Slider>
    <div class="center">
      <section id="content">
        <h2 class="subheader">Blog</h2>

        <!-- logica para poner articulos en pantalla recogiendo la informacion del backend -->
        <div id="articles" v-if="articles">
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
  name: "Blog",
  components: {
    Slider,
    Sidebar,
    Articles,
  },
  //cuando el componente se monte, muestro todos los articulos de nuestro backend.
  mounted() {
    this.getArticles();
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
    getArticles() {
      axios.get(this.url +"articles").then((res) => {
        if (res.data.status === "satisfactorio") {
          this.articles = res.data.articles;
        }
        console.log(this.articles);
      });
    },
  },
};
</script>