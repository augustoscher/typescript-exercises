class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  logDetails() :void {
    console.log(`User's name is ${this.name} and age is ${this.age}`)
  }
}

const as = new UserAccount('Augusto', 29);
console.log(as);
console.log(as.logDetails())