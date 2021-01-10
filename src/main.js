import Vue from 'vue'
import App from './App.vue'

//importamos el router el cual le debemos de dar npm install --save vue-router
import VueRouter from "vue-router";

//cargo vuelidate para validar formularios
import Vuelidate from "vuelidate";

//import el componente para añadirle una ruta
import LastArticles from "./components/LastArticles.vue"
import MiComponente from "./components/MiComponente.vue"
import HelloWorld from "./components/HelloWorld.vue"
import Blog from "./components/Blog.vue"
import Formulario from "./components/Formulario.vue"
import Pagina from "./components/Pagina.vue"
import ErrorComponent from "./components/ErrorComponent.vue"
import Peliculas from "./components/Peliculas.vue"

//componente de busqueda.
import Search from "./components/Search.vue"

//importo el componente de redirect.vue
import Redirect from "./components/Redirect.vue";


import Article from "./components/Article.vue";

import CreateArticle from "./components/CreateArticle.vue";
//importo mi componente para editar articulo ya creado
import EditArticle from "./components/EditArticle.vue";



Vue.config.productionTip = false

//aqui metemos la configuracion del router
Vue.use(VueRouter);
//para hacer uso del import de vuelidate.
Vue.use(Vuelidate);

//importo momento.js para hacer lo del castellano en el : hace 1 dia, o hace un mes. ago time.
const moment = require("moment");
//aqui esto llamando el moment en castellano:
require('moment/locale/es');

//para hacer uso del import de vue-moment. npm install --save vue-moment
Vue.use(require("vue-moment"),{
   moment
});

//definimos las rutas
const routes= [
   {path: "/home", component: LastArticles },
   {path: "/ultimos-articulos", component: LastArticles },
   {path: "/buscador/:searchString", component: Search},
   {path: "/redirect/:searchString", component: Redirect},
   {path: "/mi-componente", component: MiComponente },
   {path: "/hola-mundo", component: HelloWorld },
   {path: "/", component: LastArticles },
   {path: "/blog", component: Blog },

   //para listar un solo articulo cuando le demos click en leer mas
   {path: "/articulo/:id",name: 'article', component: Article },

   //ruta nueva para la pagina de crear articulo.
   {path: "/crear-articulo",name: "create", component: CreateArticle },

   {path: "/formulario", component: Formulario },
   {path: "/pagina/:id?", name:"pagina", component: Pagina },

   //ruta de peliculas
   {path: "/peliculas", name:"peliculas", component: Peliculas },

   //ruta para editar
   {path: "/editar/:id", name:"edit", component: EditArticle },

   //ruta 404 o ruta no encontrada, se pone con un asterisco.
   {path: "*", component: ErrorComponent },
];

//creo el objeto de vue router
const router= new VueRouter({
   routes,
   mode: "history"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
