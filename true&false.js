//const x = "";
//sempre false se a variável estiver vazia
//console.log(!!x);

// if (x) {
//   console.log(x);
// }

//zero sempre vai ser false
// const y = 0;
// console.log(!!y);

//sempre false
// const a = null;
// const b = undefined;
// console.log(!!a);
// console.log(!!b);

//lista vazia é sempre true
const list = [];
console.log(!![]);

//objeto vazio é sempre true
const object = {};
console.log(!!object);

if (list.length === 0) {
  console.log(!!list);
}

if (list.length > 0) {
  console.log(!!list);
}

//com um ! inverte a lógica
console.log(!list);
