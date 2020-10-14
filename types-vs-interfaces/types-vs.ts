// Type Alias

// definition
type Game2 = {
  title: string;
}

type DLC2 = {
  extra: string;
}

// intersection
type GameCollection2 = Game2 & DLC2;

// implements
class CreateGame2 implements GameCollection2 {}

// declarar função
type getSimilar2 = (title: string) => void;

//=========================== diferenças ===========================//

