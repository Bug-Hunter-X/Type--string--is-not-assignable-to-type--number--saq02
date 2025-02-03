function greeter(person) {
  return "Hello, " + person;
}

let user = "Jane User";

console.log(greeter(user)); //outputs: Hello, Jane User

//This is a common error that occurs when working with TypeScript. 
//The error occurs because the function greeter does not explicitly specify the type of the parameter person. 
//This means that the compiler will infer the type of person to be any, which is not ideal.

//To fix this error, you can explicitly specify the type of the parameter person. For example:

function greeter(person: string): string {
  return "Hello, " + person;
}

let user: string = "Jane User";

console.log(greeter(user)); //outputs: Hello, Jane User