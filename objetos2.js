const todos = [
  {
    id: 1,
    description: "Estudar programação",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Ler",
    isCompleted: true,
  },
  {
    id: 3,
    description: "Treinar",
    isCompleted: true,
  },
];

const descriptionOfLastToDo = todos[0].description;
const isCompletedToPrint = todos[2].id;

console.log(isCompletedToPrint);
console.log(descriptionOfLastToDo);
