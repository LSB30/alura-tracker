import IProjetos from "@/interfaces/IProjeto";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";
import {
  ADICIONA_PROJETO,
  ALTERA_PROJETO,
  EXCLUIR_PROJETO,
  NOTIFICAR,
} from "./TipoDeMut";
import { INotificacoes } from "@/interfaces/INotificacoes";
interface Estado {
  projetos: IProjetos[];
  notificacoes: INotificacoes[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
    notificacoes: [],
  },
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto,
      } as IProjetos;
      state.projetos.push(projeto);
    },
    [ALTERA_PROJETO](state, projeto: IProjetos) {
      const index = state.projetos.findIndex((proj) => proj.id === projeto.id);
      state.projetos[index] = projeto;
    },
    [EXCLUIR_PROJETO](state, id: string) {
      state.projetos = state.projetos.filter((projec) => projec.id != id);
    },
    [NOTIFICAR](state, novaNotificacao: INotificacoes) {
      novaNotificacao.id = new Date().getTime();
      state.notificacoes.push(novaNotificacao);

      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(
          (not) => not.id != novaNotificacao.id
        );
      }, 3000);
    },
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
