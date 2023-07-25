import IProjetos from "./IProjeto";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface ITarefa {
  duracaoEmSegundos: number,
  descricao: string,
  projeto: IProjetos

}