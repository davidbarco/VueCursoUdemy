<template src="./createArticle.html"></template>

<script>


import Sidebar from "./Sidebar";
import axios from "axios";
import Global from "../Global";


import {required} from "vuelidate/lib/validators";

//me creo un moelo, dentro de la carpeta models y lo importo aquí.
import ArticleModels from "../models/Article"

//importo sweetalert para las alertas mas bonitas.
import swal from "sweetalert";



export default {
    name: "EditArticle",
    components:{
       
        Sidebar
    },
    data(){
        return{
            url: Global.url,
            file: "",
            article: new ArticleModels("","",null,""),
            submitted: false,
            //para editar
            isEdit: true,
        }
    },
    //para validar el formulario de crear articulo
    validations:{
        article:{
            title:{
               required
            },
            content:{
               required
            }
           
        },
    },
    //metodo que se ejecuta al solo cargar el componente
    mounted(){
       /* console.log(this.article)   */ 
       //al entrar a la pagina de editar articulo debo mostrar la informacion del articulo a editar
       var articleId= this.$route.params.id;
       
        this.getArticle(articleId);
    },
    methods:{
        //me creo el metodo para subir la imagen, tambien me creo una propiedad file en data.
        fileChange(){
            //primer paso recoger el fichero
            this.file= this.$refs.file.files[0];
           
        },
        //metodo para mostar los datos del articulo al crear.
        getArticle(articleId){
          axios.get(this.url + 'article/' + articleId)
               .then(res=>{
                   if(res.data.status === "satisfactorio"){
                       this.article = res.data.article;
                   }
               })
      },

       save(){
        
          this.submitted= true;
          //para sacar el id del articulo y poder editar
          var articleId= this.$route.params.id;
          
          this.$v.$touch();
          if(this.$v.$invalid){
            
             return false;
          }else{
              
              axios.put(this.url + "article/" + articleId, this.article )
              
                    .then(res=>{
                        
                        if(res.data.status === "satisfactorio"){
                            

                            //segundo paso para para subir imagen
                            
                            if(this.file != null && this.file != undefined && this.file != ""){

                               const formData = new FormData();
                               console.log(formData, "formdata normal")
                               formData.append('file0', this.file, this.file.name);
                            
                            //tercer paso hago la peticion al backend al metodo de subir imagen. 
                            var articleId=  res.data.article._id;
                            axios.post(this.url + 'upload-image/' + articleId, formData )
                                 .then(res=>{
                                     if(res.data.article){
                                    
                                         this.article= res.data.article;

                                         //alerta con sweetalert
                                         swal("Articulo Editado!", "se ha editado satisfactoriamente!", "success");
                                         
                                         //si es estatus satisfactorio, que me lleve a la pagina del block
                                         this.$router.push("/articulo/"+ this.article._id)
                                         
                                     }else{
                                         //si no me llega el article, muestro una alerta de error.
                                         //alerta con sweetalert
                                         swal(" Edicion fallida!", "el articulo no se ha editado!", "error");
                                     }
                                 })
                                 .catch(error=>{
                                     console.log(error)
                                 })
                            }else{
                             //alerta con sweetalert
                             swal("Articulo Editado!", "se ha editado satisfactoriamente!", "success");   
                             
                             this.article= res.data.article;
                            //si es estatus satisfactorio, que me lleve a la pagina del block
                            this.$router.push("/articulo/"+  this.article._id)
                        }
                            

                        }
                    })
                    .catch(error =>{
                        console.log(error);
                    })
          }


       }
    }
}
</script>