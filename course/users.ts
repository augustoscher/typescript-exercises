// extending type aliases with intersection

type AccountInfo = {
  id: number;
  name: string;
  email?: string; //string | undefined
}

type CharInfo = {
  nick: string;
  level: number;
}

// intersection 
type PlayerInfo = AccountInfo & CharInfo

const account: AccountInfo = {
  id: 1,
  name: 'xunda',
  email: 'xunda@xunda.com'
}

const char: CharInfo = {
  nick: 'xunda',
  level: 100
}

const player: PlayerInfo = {
  id: 1,
  name: 'xunda',
  email: 'xunda@xunda.com',
  nick: 'xunda',
  level: 100
}