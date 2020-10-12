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
  stars: number;


  constructor(name: string, age: number, nickname: string, level: number, stars: number){
    super(name, age);
    this.nickname = nickname;
    this.level = level;
    this.stars = stars;
  }

  get getLevel() {
    return this.level
  }

  set setStars(stars: number) {
    this.stars = stars;
  }

  logCharDetails(): void {
    console.log(`${this.name}, ${this.age}, ${this.nickname}, ${this.level}, ${this.stars}`);
  }

}

const as = new UserAccount('Augusto', 29);
console.log(as);
as.logDetails()

const ca = new CharAccount('A', 29, 'ascher', 100, 3);
console.log('CharAccount: ', ca);
ca.logDetails();
ca.logCharDetails();

ca.setStars = 5
ca.logCharDetails()