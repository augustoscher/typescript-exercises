// pra que ser?
// o que é?
// Prezar pela reutilização
// Quando definimos os tipos em linguagem fortemente tipada, acabamos não sendo tão genéricos
// Generics: Conseguir ter uma certa flexibilidade de tipo dentro de uma linguagem tipada

function useState() {
  let state: number;

  function getState() {
    return state;
  }

  function setState(newState: number) {
    state = newState
  }

  return { getState, setState }
}

const newState = useState();
newState.setState(123);
console.log('newState: ', newState);
console.log('newState: ', newState.getState());