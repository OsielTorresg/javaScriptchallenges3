///// easy /////

function exercise(x) {
  ////stated my function

  return () => x; ///// made it return variable so when i console log it will state what i want it to say
}

let run = exercise("running"); ///created a variable
let swim = exercise("swimming"); ///created a variable

console.log(swim());
console.log(run()); ////consoled it to display on my console///

/////medium///
function cutPizzaSlices(slices, people) {
  ///made the cutPizzaSlices into a function
  return `Each person gets ${slices / people} slices of pizza`; ///// the numbers look to be divided so i created a division operater with my variables
}
console.log(cutPizzaSlices(8, 2)); /// console.log to be able to be displayed
console.log(cutPizzaSlices(8, 3));
////hard////

class Person {
  #name;
  #ssn;
  constructor(name, ssn) {
    this.#name = name;
    this.#ssn = ssn;
  }
  get name() {
    return this.#name;
  }
}
const person3 = new Person("John", 436);
console.log(person3.ssn);
console.log(person3.name);

var person = (function () {
  let pii = {
    name: "osiel",
    ssn: "123-45-6789",
  };
  return {
    getName: function () {
      console.log(pii.name);
    },
  };
})();
person.getName();

//VERYHARD
//VERY HARD: Object prototype chain and prototypal inheritance exercise.

class Person {
  name;
  job;
  age;
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  exercise() {
    console.log(` ${this.name} Is running for fun !`);
  }
  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}
const worker = new Person("osiel", "software engenieer", 20);
worker.fetchJob();

class Programmer extends Person {
  constructor(name, job, age, languages) {
    super(name, job, age);
    this.languages = languages;
    this.busy = true;
  }
  completeTask() {
    this.busy = false;
  }
  acceptNewTask() {
    this.busy = true;
  }
  offerNewTask() {
    if (this.busy === true) {
      console.log(`${this.name} is to busy`);
    } else {
      console.log(`${this.name} is ready to work `);
    }
  }
  learnLanguage(x) {
    this.languages.push(x);
  }
  listLanguages() {
    console.log(this.languages);
  }
  allInfo() {
    console.log(
      `${this.name} is a ${this.job} and he is ${this.age} and he has experience with ${this.languages}`
    );
  }
}

const coWorker = new Programmer("dan", "software engenieer", 23, [
  "html",
  "css",
  "javascript",
]);
coWorker.allInfo();

const coWorker2 = new Programmer("derik", "software engenieer", 30, [
  "html",
  "css",
  "javascript",
]);
coWorker2.allInfo();
