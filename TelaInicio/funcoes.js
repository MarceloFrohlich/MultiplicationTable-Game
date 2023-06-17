export const gerarNumero = () => {
    return Math.floor(Math.random() * (10 - 1) + 1)
}

export let Certa = 0
export let Errada = 0

export const validarResposta = ( numero1, numero2, respostaUsuario ) => {
  const respostaCerta = numero1 * numero2;


    if ( respostaUsuario == respostaCerta) {
      Certa = Certa + 1;
      return true;
    } else {
      Errada = Errada + 1;
      return false;
    }
}