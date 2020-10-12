class UserAccount {
  public name: string; //modificador default
  protected age: number; //só funciona no escopo dentro da classe ou de subclasses.

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  logDetails() :void {
    console.log(`User's name is ${this.name} and age is ${this.age}`)
  }
}

class CharAccount extends UserAccount {
  private nickname: string; //não fica visível para nada fora do escopo da classe.
  readonly level: number; //permite somente ler fora do escopo da classe.

  constructor(name: string, age: number, nickname: string, level: number){
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    return this.level
  }
}

const as = new UserAccount('Augusto', 29);
console.log(as);
as.logDetails()

const ca = new CharAccount('A', 29, 'ascher', 100);
console.log('CharAccount: ', ca);
ca.logDetails();