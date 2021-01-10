

<template>
    <section id="content">
    <h2 class="subheader">{{titulo}}</h2>

        <hr>
        <h1>este es MiComponente</h1>
        <h2>{{subtitulo}}</h2>
        

    <!-- vamos a comprobar lo que es el databindin y la reactividad, me creo en el data la propiedad nombre vacia, y con el v-model en el input, llamo esa propiedad, y lo que escriba alli dentro, reactivamente va rellenando la propiedad vacia de nombre. para mas informacion: clase 225 de master en frameworks victor robles. -->
        <h2>Reactividad</h2>
        <input type="text" name="" id="" v-model="nombre">
        <h2>{{nombre}}</h2>
        

        <!-- directivas y condicionales ( v-if en vue) -->
        <h2>Directivas condicionales</h2>
        <input type="number" name="" id="" v-model="edad">
        <p>mi edad es: <strong>{{edad}}</strong></p>
        
        <p style="color: red; font-weight:bold" v-if="edad && edad >= 18 &&edad<65">!!Eres mayor de edad</p>
        <p style="color: blue; font-weight:bold" v-else-if="edad && edad >= 65">!!Eres de la tercera de edad</p>
        <p style="color: green; font-weight:bold" v-else>!!Eres menor  de edad</p>
        
        
        <!-- directivas iterativas, definimos una propiedad peliculas en mi data. y me defino varias peliculas --> 
        <h2>Directiva iterativa</h2>
        <ol>
            <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
        </ol>
        
       

    </section>
</template>

<script>
export default {
    name: "MiComponente",
    data(){
        return{
            titulo: "Mi Componente",
            subtitulo: "soy el subtitulo de mi componente",
            //nombre como ejemplo para el databindin
            nombre: "",
            edad: 18,
            peliculas: ["spiderman", "los vengadores", "Los simpsons","La mujer maravilla"]
        }
    }
}
</script>