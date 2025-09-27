//aula 11 heranças

//classe 1
class Animal {
  //construtor
  constructor(nome) {
    this.nome = nome;
  }

  //método
  speak() {
    console.log(`${this.nome} made some noise!`);
  }
}

//classe 2
class Dog extends Animal {
  constructor(nome) {
    super(nome);
  }

  //métodos:
  speak() {
    console.log(`${this.nome} latiu!`);
  }
}

//estância e função da classe 1
const animal = new Animal("Simba");
animal.speak();

//função chamando classe 2 por herança da classe 1
const dog = new Dog("Bob");
dog.speak();
