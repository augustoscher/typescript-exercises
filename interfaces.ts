// conjunto de dados para descreve a estrutura de um objeto
interface Game {
  title: string;
  description: string;
  genre: string;
  platform: string[];
  getSimilars: (title: string) => void
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

theLastOfUs.getSimilars("The Last Of Us")