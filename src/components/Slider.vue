<template>
<!-- le aplico una clase con los dos puntos por delante. cuando este en home le aplica una clase, cuando no, aplica otra clase-->
    <div id="slider" :class="{
        'slider-big': home,
        'slider-small': !home

    }">
        <h1>{{texto}}</h1>
        <router-link to="/blog" class="btn-white" v-if="home">Ir al blog</router-link>
    </div>
</template>

<script>
export default {
    name: "Slider",
    props: [
        "texto",
        "home"
    ]
}  
</script>