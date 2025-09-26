let i = 0;

while (i < 10) {
  console.log("i = " + i);
  i++;
  //mesma coisa
  //i = i + 1;
  //i += 1;
}

const person = {
  nickName: "Cris",
  age: 39,
  Name: "Cristiane",
  midleName: "K. Almeida",
  lastName: "Machado",
};

for (property in person) {
  console.log(person[property]);
}
