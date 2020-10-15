// Interfaces

//definition
interface Game {
  title: string;
}

interface DLC {
  extra: string;
}

// instersection | extend
interface GameCollection extends Game, DLC {}

//implements
class CreateGame implements GameCollection {}

// declarar função
interface getSimilars {
  (title: string): void;
}

//=========================== diferenças ===========================//

// interface ID extends number {} não é possível criar interface e extender de number

interface Tuple {
  0: number;
  1: number;
}

// Pode ter multiplas declarações da mesma interface.
// Typescript faz o merge
interface JQuery {
  a: string;
}

interface JQuery {
  b: string;
}

const te: JQuery = {
  a: 'foo',
  b: 'bar',
  // c: 'oasijd' não existe na interface
}