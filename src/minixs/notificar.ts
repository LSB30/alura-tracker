import { TipoNotificacao } from "@/interfaces/INotificacoes";
import { NOTIFICAR } from "@/store/TipoDeMut";
import { store } from "@/store";
export const notificarMixin = {
  methods: {
    notificar(tipo: TipoNotificacao, titulo: string, texto: string): void {
      store.commit(NOTIFICAR, {
        titulo,
        texto,
        tipo,
      });
    },
  },
};
