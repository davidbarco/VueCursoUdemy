<template>
    <h1>Redirigiendo...</h1>
</template>



<script>
export default {
    name: "Redirect",
    //este componente en general lo creamos para que cuando yo esté en el buscador me rediriga. ver clase 248 del master en vue.
    mounted(){
        var searchString= this.$route.params.searchString;
        this.$router.push('/buscador/'+ searchString )
    }

}
</script>

