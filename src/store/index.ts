import IProjetos from "@/interfaces/IProjeto";
import { createStore, Store , useStore as vuexUseStore} from "vuex";
import { InjectionKey } from "vue";
interface Estado {
  projetos: IProjetos[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
  },
  mutations: {
    'ADICIONA_PROJETO'(state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      } as IProjetos
      state.projetos.push(projeto)
    },
    'ALTERA_PROJETO'(state, projeto: IProjetos) {
      const index = state.projetos.findIndex(proj => proj.id === projeto.id)
      state.projetos[index] = projeto
    }
  },
});

export function useStore() : Store<Estado> {
  return vuexUseStore(key)
}