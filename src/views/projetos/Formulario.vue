<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome Do Projeto</label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto" />
      </div>
      <div class="field">
        <button class="button" type="submit">
          Salvar
        </button>
      </div>
    </form>

  </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from 'vue';
import { ADICIONA_PROJETO, ALTERA_PROJETO } from "../../store/TipoDeMut";
import { TipoNotificacao } from "@/interfaces/INotificacoes";
import useNotificador from "@/Hooks/notificador";
export default defineComponent({
  name: "FormularioTracker",
  props: {
    id: {
      type: String
    }
  },


  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(proj => proj.id === this.id);
      this.nomeDoProjeto = projeto?.nome || '';
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    }
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto,

        })
        this.notificar(TipoNotificacao.ATENCAO, 'Atenção!', 'O projeto foi alterado !')

      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
        this.notificar(TipoNotificacao.SUCESSO, 'Excelente!', 'O projeto foi cadastrado !')

      }
      this.nomeDoProjeto = "";
      this.$router.push('/projetos')
    },
  },
  setup() {
    const store = useStore()
    const { notificar } = useNotificador()
    return {
      store,
      notificar
    }
  }
})

</script>

