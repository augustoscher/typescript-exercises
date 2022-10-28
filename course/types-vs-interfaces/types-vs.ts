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
class CreateGame2 implements GameCollection2 {
  title: string;
  extra: string;
}

// declarar função
type getSimilar2 = (title: string) => void;

//=========================== diferenças ===========================//

// permite declarar tipos primitivos
type ID2 = string | number

// possível declarar tuplas normalmente
type Tuple2 = [number, number, string];

[1, 2, "xunda"] as Tuple2;

// Apenas uma declaração por escopo
type JQuery2 = { a: string };
// type JQuery2 = { b: string }; não permitido, tipo já declarado

// recomendado usar na maioria das vezes.
// iniciar com type e quando for necessário extender, muda para interface
// Usar em React - Props

// CONSISTÊNCIA!
// Manter consistência com o projeto que estamos trabalhando
