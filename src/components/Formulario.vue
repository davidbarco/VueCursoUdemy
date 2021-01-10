

<template>

  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Formulario</h2>

        <!-- creo un metodo y le paso el preven para que no me recargue la pantalla -->
        <form class="full-form" v-on:submit.prevent="mostrarUsuario()">


          <div class="form-group">
            <label for="nombre">Nombre</label>
            <!-- vinculamos por medio de v-model el input con el model de user -->
            <input type="text" name="nombre" id="" v-model="user.nombre" />
            <!-- logica de validacion del nombre -->
            <div v-if="submitted && !$v.user.nombre.required">
              Este campo es requerido.
            </div>
            <!-- logica para la longitud del campo -->
              <div v-if="submitted && !$v.user.nombre.minLength">
              Este campo debe contener minimo 2 caracteres
            </div>
          </div>


          <div class="form-group">
            <label for="Apellidos">Apellidos</label>
            <input type="text" name="apellidos" id="" v-model="user.apellidos" />
            <!-- logica de validacion de apellidos -->
            <div v-if="submitted && !$v.user.apellidos.required">
              Este campo es requerido.
            </div>
            <!-- logica para la longitud del campo -->
              <div v-if="submitted && !$v.user.apellidos.minLength">
              Este campo debe contener minimo 2 caracteres
            </div>
          </div>


          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea name="bio" id="" cols="30" rows="10" v-model="user.bio"></textarea>
            <!-- logica de validacion de apellidos -->
            <div v-if="submitted && !$v.user.bio.required">
              Este campo es requerido.
            </div>
            <!-- logica para la longitud del campo -->
              <div v-if="submitted && !$v.user.bio.minLength">
              Este campo debe contener minimo 10 caracteres
            </div>
          </div>


          <div class="form-group radio-buttons">
            <input type="radio" name="genero" id="" value="hombre" v-model="user.genero"/>Hombre
            <input type="radio" name="genero" id="" value="mujer" v-model="user.genero"/>Mujer
            <input type="radio" name="genero" id="" value="otro" v-model="user.genero"/>Otro
          </div>


          <div class="clearfix"></div>
          <input type="submit" value="Enviar" class="btn btn-success" />

        </form>

        <div>
          <h2>{{user.nombre}}</h2>
        </div>

      </section>

      <Sidebar></Sidebar>

      <div class="clearfix"></div>

    </div>

  </div>

</template>

<script>

import Sidebar from "./Sidebar.vue";

//<!-- libreria para validar datos se llama: npm install --save vuelidate  -->
import {required,minLength} from "vuelidate/lib/validators";


export default {
  name: "Formulario",
  components: {
    Sidebar,
  },
  //para hacer validaciones de formulario
  validations:{
    user:{
      nombre:{
        required,
        minLength: minLength(2)
      },
      apellidos:{
        required,
        minLength: minLength(2)
      },
      bio:{
        required,
        minLength: minLength(10)
      }

    }
  },
  //para validar formulario, traemos el objeto que va a estar validando.
  data(){
     return{
       //me defino una propiedad para hacer validacion en este caso se llama submitted. //tambien debo cargar vuelitade en el main.js
        submitted: false,
        user:{
          nombre: "",
          apellidos: "",
          bio: "",
          genero: ""
        }
     }
  },
  methods:{
    mostrarUsuario(){
      console.log(this.user);
      this.submitted= true;
      this.$v.$touch();
      if(this.$v.$invalid){
         return false;
      }
      alert("validacion pasada y correcta")
    }
  }
};
</script>

