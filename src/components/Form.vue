<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulario para criação de uma nova tarefa">
        <input 
        type="text" 
        class="input" 
        placeholder="Qual Tarefe voce deseja iniciar"
        v-model="descricao"
        >
      </div>
      <div class="column">
        <Temporizador @ao-temporizador-finalizado="finalizarTarefa" />

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Form",
  emits: ['aoSalvarTarefa'],
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Temporizador
  },
  data() {
    return{
      descricao: '',
    }
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao
      })
      console.log(this.descricao)
      this.descricao = '';
    }
  },

})
</script>

<style>
  .formulario {
    color: var(--text-box);
    background-color: var(--bg-box);
    border-radius: 0;
  }
</style>