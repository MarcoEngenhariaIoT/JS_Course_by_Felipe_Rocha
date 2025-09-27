class Pessoa {
  //construtor
  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  //metodo 1
  //   obterNomeCompleto() {
  //     return `${this.nome} ${this.sobrenome}`;
  //   }

  //   //metodo 2
  //   getFullName() {
  //     console.log(`${this.nome} ${this.sobrenome}`);
  //   }

  //   //metodo 3
  //   speak() {
  //    console.log("Hello world!");
  //   }

  //método 4 modo estático
  static speak() {
    console.log("Hello world!");
  }
}

//Tem que estanciar as classes
//acessando diretamente a classe sem métodos
//estância
//const pessoa = new Pessoa("Marco", "Machado", 49);
//console.log(pessoa);

// usando métodos:
//referente ao método 1
//estância
// const nomeCompleto = new Pessoa("Cristiane", "Machado", 39);
// console.log(nomeCompleto.obterNomeCompleto());

//referente ao método 2
//estância
// const outroMetodo = new Pessoa("Miguel", "Machado", 6);
// outroMetodo.getFullName();

//referente ao metodo 3
//const metodo3 = new Pessoa("Murillo", "Machado", 23);
//metodo3.speak();

//no método 3 como não precisa imprimir os dados de entrada do objeto
//pode ser usado o o método dinâmico sem estaciar a classe
//método 4
//acessa direto a classe no modo estático
Pessoa.speak();
