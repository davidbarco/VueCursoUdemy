<template>
  <div class="general">
    <!-- props. texto="blog" coloco una props en el componente del slider, luego me voy al slider y recibo esa props-->

    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="article">
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
          <h1 class="subheader">{{ article.title }}</h1>
          <span class="date">{{ article.date | moment("from", "now") }}</span>
          <p>
            {{ article.content }}
          </p>

          <div class="clearfix"></div>

          <!-- botones de edicion y borrado -->
          <div class="botones">
            <router-link :to="'/editar/' + article._id" class="btn btn-warning"
              >Editar</router-link
            >
            <a @click="DeleteArticle(article._id)" class="btn btn-danger"
              >Borrar</a
            >
          </div>
        </article>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Global from "../Global";
import axios from "axios";

//importo sweetalert para las alertas mas bonitas.
import swal from "sweetalert";

export default {
  name: "Article",
  components: {
    Sidebar,
  },
  data() {
    return {
      url: Global.url,
      article: null,
    };
  },
  mounted() {
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    getArticle(articleId) {
      axios.get(this.url + "article/" + articleId).then((res) => {
        if (res.data.status === "satisfactorio") {
          this.article = res.data.article;
        }
      });
    },
    //metodo para eliminar articulo.
    DeleteArticle(articleId) {
      //sweet alert para confirmar si deseas borrar
      swal({
        title: "Estas seguro que deseas borrar ?",
        text:
          "una vez borrado, no se podrá recuperar el articulo!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(this.url + "article/" + articleId).then((res) => {
        console.log(res.data.status);
        if (res.data.status === "satisfactorio") {
          //alerta con sweetalert
          swal(
            "Articulo Borrado!",
            "se ha Borrado satisfactoriamente!",
            "success"
          );
          //redireccionar cuando haya sido borrado.
          this.$router.push("/blog");
        }
      });
        } else {
          swal("No se ha borrado nada!");
        }
      });

      
    },
  },
};
</script>