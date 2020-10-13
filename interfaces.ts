// conjunto de dados para descreve a estrutura de um objeto
interface Game {
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[]; //optional
  getSimilars?: (title: string) => void
}

const theLastOfUs: Game = {
  title: 'The last of us',
  description: 'Best Game',
  genre: 'Action',
  platform: ['PS3', 'PS4'],
  getSimilars: (title: string) => {
    console.log(`Similar games of ${title}: Uncharted, A Plague Tale, Metro`);
  }
}

if(theLastOfUs.getSimilars) theLastOfUs.getSimilars("The Last Of Us");
// theLastOfUs.genre = '' cannot assign because is readonly
console.log('genre: ', theLastOfUs.genre);

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const leftBehind: DLC = {
  title: "The Last og US - Left Behind",
  description: "blah",
  genre: 'Action',
  platform: ["PS$"],
  originalGame: theLastOfUs,
  newContent: ['3hours story', 'new characters']
}