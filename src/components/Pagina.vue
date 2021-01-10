<template>
<div class="general">
<Slider texto="pagina de pruebas"></Slider>
    <div class="center">
    <section id="content">
    <h2 class="subheader">pagina de pruebas.</h2>
    <h3>{{id_desde_url}}</h3>
    <!-- para hacer redirecciones -->
    <button @click="RedirigirAlBlog()">Redirigir al blog</button>

    <button @click="actualizarNombre()">Actualizar nombre</button>
    <!-- me defino un nombre en el data, pero luego en el metodo actualizar nombre lo reasigno y puedo cambiar el nombre mediante el metodo. -->
    <h4>{{nombre}}</h4>
    </section>
     <Sidebar></Sidebar>
    <div class="clearfix"></div>
    </div>
    </div>
</template>

<script>

import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";


export default {
    name: "Pagina",
    components:{
      Slider,
      Sidebar
    },
    //recoger parametros de la ruta. o url, con el this.$route.params.id "el id es el parametro que le paso por la ruta"
    mounted(){
         this.id_desde_url= this.$route.params.id;
         console.log(this.id_desde_url)
    },
    data(){
        return{
            id_desde_url: null,
            nombre: "david barco",
        }
        
    },
    //metodo actualizar nombre, se define dentro de la propiedad methods
    methods:{
        actualizarNombre(){
            this.nombre= "DAVID BARCO"
            console.log(this.nombre)
           
        },
        RedirigirAlBlog(){
            //para redirigir a otra ruta
            this.$router.push("/blog");

        }

    }
};
</script>