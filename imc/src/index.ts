import promptSync from 'prompt-sync';
const prompt = promptSync();

const name = prompt('What is your name? ');
console.log(`your name is: ${name}`);

const age = parseInt(prompt('What is your age? '));
console.log(`your age is: ${age}`);
