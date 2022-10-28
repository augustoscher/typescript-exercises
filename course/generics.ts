// pra que ser?
// o que é?
// Prezar pela reutilização
// Quando definimos os tipos em linguagem fortemente tipada, acabamos não sendo tão genéricos
// Generics: Conseguir ter uma certa flexibilidade de tipo dentro de uma linguagem tipada

// S => State
// T => Type
// K => Key
// V => Value
// E => Element

// S extends number | string defininf generic
// = string set default type to generic
function useState<S extends number | string = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState }
}

const newState = useState<string>();
newState.setState("123");
console.log('newState: ', newState.getState());
// newState.setState(123); number not allowed to assign to string