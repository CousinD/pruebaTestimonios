<template>
  <div id="app">
    <h1>Valoraciones del producto</h1>
    <p>Aquí puedes consultar las últimas valoraciones que los usuarios han hecho sobre este producto</p>
    <!-- Elemento -->
    <div id="contenedor">
        <testimonio v-for="(item, index) in misDatos" :person="item" :key="index"></testimonio>
    </div>
  </div>
</template>

<script>
import testimonio from './components/testimonio.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    testimonio,
  },
  data(){
    return{
      misDatos: null
    }
  },
  mounted() {
    axios.get('http://localhost:8080/server/reviews.json').then(response => (this.misDatos = response.data.reviews));

  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  margin-top: 20px;
  margin-left: 20px;
}

#app h1{
  color:darkgreen;
}

#contenedor{
  display: inline-flex;
  flex-wrap: wrap;
}

</style>
