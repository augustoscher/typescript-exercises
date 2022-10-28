type Todo = {
  title: string;
  description: string;
  completed: boolean;
}

// make all properties readonly
const todo: Readonly<Todo> = {
  title: "Assistir Dark",
  description: "Dizem que é legal",
  completed: false,
}

console.log(todo);
// todo.completed = true; not allowed

// returns another object spreading todo's on object
// Partial make all properties in T optionals
const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
  return { 
    ...todo,
    ...fieldsToUpdate
  }
}

const todo2: Todo = updateTodo(todo, { completed: true })

// pick
// creates type TodoPreview containing title and completed properties
type TodoPreview = Pick<Todo, "title" | "completed">
const todo3: TodoPreview = {
  title: "My todo",
  completed: false,
}

// omit
// inverso de pick. Omits especified properties
type TodoPreview2 = Omit<Todo, "description">
const todo4: TodoPreview2 = {
  title: 'My Todo4',
  completed: false,
  // description: 'Hi', error because is omited
}