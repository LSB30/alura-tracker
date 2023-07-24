<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="">
    </h1>
    <button class="button" @click="alterarTema">
      {{ textoBotao }}
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent ({
  name: 'BarraLateral',
  emits: ['aoTemaAlterado'],
  data () {
    return {
      modoEscurtoAtivo: false
    }
  },
  computed: {
    textoBotao () {
      if(this.modoEscurtoAtivo) {
        return "Tema Light"
      }
      return "Tema Dark"
    }
  },
  methods: {
    alterarTema () {
      this.modoEscurtoAtivo = !this.modoEscurtoAtivo
      this.$emit('aoTemaAlterado', this.modoEscurtoAtivo)
    }
  }
})
</script>

<style scoped>
header {
  padding: 2rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;

}
h1 {
  text-align: center;
}
img {
  width: 8rem;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>