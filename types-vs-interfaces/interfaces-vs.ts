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