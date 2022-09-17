// Try writing your first closure. Write a function called printName and declare inside it a variable called helloName, the value of this variable will be: "Hello John". Also declare a function named inner and return the helloName variable. The purpose is printing "Hello John" in the console.

function printName() {
  let helloName = "Hello John";
  function inner() {
    return helloName;
  }
  return inner;
}

setTimeout(() => {
  console.log(printName()());
}, 1000);
