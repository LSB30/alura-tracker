<template>
  <main class="columns is-gapless is-multiline " :class="{ 'modo-escuro': modoEscuroAtivo}">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <Form @aoSalvarTarefa="salvarTarefa" />

      <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <Box v-if="listaVazia">
          Você não está muito produtivo hoje :(
        </Box>
      </div>

    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Form from './components/Form.vue';
import Tarefa from './components/Tarefa.vue';
import ITarefas from "./interfaces/ITarefa"
import Box from './components/Box.vue';
export default defineComponent({
  name: "App",
  components: { BarraLateral, Form, Tarefa, Box },
  data() {
    return {
      tarefas: [] as ITarefas[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaVazia () : boolean {
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

<style>
.lista {
  padding: 1.1rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
  --bg-box: #2b2d42;
  --text-box : #fff;
  
}

main.modo-escuro {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
  --bg-box : #FAF0CA;
  --text-box : #000;
}

.conteudo {
  background-color: var(--bg-primary);
}
</style>
