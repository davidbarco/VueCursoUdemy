<template>
<div class="general">

    <div class="center">
  <section id="content">
    <h1 class="subheader">Peliculas</h1>

    <div class="Favorita" v-if="favorita">
      La pelicula favorita es: 
      <h3>{{favorita.title | mayusculas}}</h3>
    </div>

    <!-- listado de artículos  , para interpolar una imagen, debe ser asi: :src="pelicula.image"--> 
    <div id="articles">
     <!--  v-for="pelicula of peliculas" v-bind:key="pelicula.title" -->
     <div v-for="pelicula of peliculas" v-bind:key="pelicula.title">
       <!-- aqui puedo itulizar el emit que hice en el componente pelicula. -->
     <Pelicula :pelicula="pelicula" v-on:favorita="haLlegadoLaPeliculaFavorita"></Pelicula>
     </div>
    </div>
  </section>
  <Sidebar></Sidebar>
    <div class="clearfix"></div>
    </div>
    </div>
</template>

<script>

//importo componente
import Pelicula from "./Pelicula.vue"

import Sidebar from "./Sidebar.vue";


export default {
  name: "Peliculas",
  components:{
     Pelicula,
   
     Sidebar
  },
  methods:{
    haLlegadoLaPeliculaFavorita(favorita){
      console.log(favorita.title)
      this.favorita = favorita
    }
  },
  //para crear filtros
  filters:{
    mayusculas(value){
      return value.toUpperCase();
    }
  },
  //propiedades computadas
  computed:{

  },
  data(){
        return{
          //creo una propiedad para favorita.
            favorita: null,
            //array de objetos
            peliculas:[
                {title: "Los simpsons", year: 2020, image: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/11/simpson-serie-tv-cartel.jpg?itok=0t1qO4fD" },
                {title: "Los power rangers", year: 1984, image: "https://www.eluniverso.com/sites/default/files/styles/powgallery_1024/public/fotos/2017/04/901.f492d24767ed3a688f959ef7f419f849_2.jpg?itok=q1UVzLS6" },
                {title: "Dragon Ball z", year: 1991, image: "https://images-na.ssl-images-amazon.com/images/I/71tPffGuT8L._AC_SL1334_.jpg" },
                {title: "Volver al futuro", year: 1985, image: "https://larepublica.pe/resizer/bZPJeLEPJB5LuqTqGCRbUOqGDK8=/1200x660/top/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/GET4O56FWJGU7NQECGWM2WUXGI.jpg" }
                            
            ]
        }
    }
};
</script>