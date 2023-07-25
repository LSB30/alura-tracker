<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Box v-if="listaVazia">
      Você não está muito produtivo hoje :(
    </Box>
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import ITarefas from "../interfaces/ITarefa"
import Box from '../components/Box.vue';
export default defineComponent({
  name: "App",
  components: { Formulario, Tarefa, Box },
  data() {
    return {
      tarefas: [] as ITarefas[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0;
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefas) {
      this.tarefas.push(tarefa)
    },
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>


