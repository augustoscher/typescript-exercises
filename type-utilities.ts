type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

const todo: Todo = {
  title: "Assistir Dark",
  description: "Dizem que é legal",
  completed: false,
}

console.log(todo);
todo.completed = true;
console.log(todo);