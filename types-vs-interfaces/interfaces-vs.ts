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