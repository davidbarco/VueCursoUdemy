<template>
   <header id="header">
        <div class="center">
            <!-- logo -->
            <div id="logo">
                <img class="app-logo" src="../assets/logo.png" alt="logotipo">
                <span id="brand"><strong>Curso</strong>Vue</span>
            </div>

            <!-- menú -->
            <nav id="menu">
                <ul>
                    <li>
                        <!-- para marcar una ruta como activa : active-class="active" -->
                        <router-link to="/home" active-class="active">Inicio</router-link>
                    </li>
                    <li>
                        <router-link to="/blog" active-class="active">Blog</router-link>
                    </li>
                    <li>
                        <router-link to="/formulario" active-class="active">Formulario</router-link>
                    </li>
                    <li>
                        <router-link to="/pagina" active-class="active">Pagina 1</router-link>
                    </li>
                    <li>
                        <router-link to="/peliculas" active-class="active">Peliculas</router-link>
                    </li>
                </ul>
            </nav>

            <!-- limpiar flotados -->
            <div class="clearfix"></div>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>