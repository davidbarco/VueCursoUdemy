<template>


  <article class="article-item" id="article-template">
    <div class="image-wrap">
      <img
        class="imagenPelicula"
        :src="pelicula.image"
        :alt="pelicula.title"
        :title="pelicula.title"
      />
    </div>
    <h2>{{ pelicula.title }}</h2>
    <!-- cuando itulizo el v-bind puedo utilizar condiciones -->
    <span
      class="date"
      v-bind:class="{
        yeargreen: pelicula.year >= 1985,
        yearblue: pelicula.year <= 1984,
      }"
      ><strong> Año: </strong>{{ pelicula.year }}</span
    >
    <a href="#">Leer Más</a>

    <!-- props de hijo a padre -->
    <input
      type="button"
      value="Marcar como favorita"
      @click="PasarFavoritaAlPadre(pelicula)"
    />

    <div class="clearfix"></div>
  </article>


</template>

<script>
export default {
  name: "Pelicula",
  //props
  props: ["pelicula"],
  methods: {
    PasarFavoritaAlPadre(pelicula) {
      /* console.log(pelicula) */
      this.$emit("favorita", pelicula);
    },
  },
};
</script>