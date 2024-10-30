const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

//Exercise 1
let numbers = [2, 4, 6, 10, 5];

for (i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2;
}

console.log(numbers);

//Exercise 2
const students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Charlie', grade: 'A' },
  { name: 'David', grade: 'C' },
];

let StudentsWithGradeA = [];

for (i = 0; i < students.length; i++) {
  if (students[i].grade === 'A') {
    StudentsWithGradeA.push(students[i].name);
  }
}

console.log(StudentsWithGradeA);

//Exercise 3
const prices = [99, 150, 75, 120, 200];

let PricesGreaterThan100 = [];

for (i = 0; i < prices.length; i++) {
  if (prices[i] > 100) {
    PricesGreaterThan100.push(prices[i]);
  }
}

console.log(PricesGreaterThan100);

//Exercise 4
let ages = [12, 15, 22, 29, 34];

let EvenAges = [];

for (i = 0; i < ages.length; i++) {
  if (ages[i] % 2 === 0) {
    EvenAges.push(ages[i]);
  }
}

console.log(EvenAges);

//Exercise 5
const sports = ['Soccer', 'Basketball', 'Tennis'];

for (i = 0; i < sports.length; i++) {
  sports[i] = sports[i] + '?';
}

console.log(sports);

//Exercise 6
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let EvenNumbers = [];

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    EvenNumbers.push(numbers[i]);
  }
}

console.log(EvenNumbers);

//Exercise 7
let OddNumbers = [];

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    OddNumbers.push(numbers[i]);
  }
}

console.log(OddNumbers);

//Exercise 8
const names = ['John', 'Doe', 'Jane', 'Smith'];

let concatNames = '';

for (i = 0; i < names.length - 1; i++) {
  concatNames = concatNames + names[i] + '-';
}

concatNames = concatNames + names[i];

console.log(concatNames);

//Exercise 9
let strings = ['Hello', 'world', 'from', 'practice', 'set'];

let concatStrings = '';

for (i = 0; i < strings.length - 1; i++) {
  concatStrings = concatStrings + strings[i] + ' ';
}

concatStrings = concatStrings + strings[i];

console.log(concatStrings);

//Exercise 10
strings = ['apple', 'banana', 'cherry'];

concatStrings = '';

for (i = 0; i < strings.length - 1; i++) {
  concatStrings = concatStrings + strings[i] + ',';
}

concatStrings = concatStrings + strings[i];

console.log(concatStrings);

//Exercise 11
const cars = [
  { make: 'Toyota', model: 'Camry', year: 2015 },
  { make: 'Honda', model: 'Accord', year: 2008 },
  { make: 'Tesla', model: 'Model 3', year: 2020 },
  { make: 'Ford', model: 'Fusion', year: 2009 },
];

let CarsManufacturedAfter2010 = [];

for (i = 0; i < cars.length; i++) {
  if (cars[i].year > 2010) {
    CarsManufacturedAfter2010.push(cars[i]);
  }
}

console.log(CarsManufacturedAfter2010);

//Exercise 12
const temperatures = [0, 20, 37, 100];

let temperaturesInFahrenheit = [];

for (i = 0; i < temperatures.length; i++) {
  temperaturesInFahrenheit.push((temperatures[i] * 9) / 5 + 32);
}

console.log(temperaturesInFahrenheit);

//Exercise 13
const scores = [10, 22, 25, 33, 40, 55];

let ScoresMultiplesOf5 = [];

for (i = 0; i < scores.length; i++) {
  if (scores[i] % 5 === 0) {
    ScoresMultiplesOf5.push(scores[i]);
  }
}

console.log(ScoresMultiplesOf5);

//Exercise 14
const events = [
  { title: 'Concert', date: '2022-08-10', location: 'New York' },
  { title: 'Art Exhibition', date: '2022-09-12', location: 'Los Angeles' },
  { title: 'Tech Conference', date: '2022-10-05', location: 'New York' },
];

let NewYorkEvents = [];

for (i = 0; i < events.length; i++) {
  if (events[i].location === 'New York') {
    NewYorkEvents.push(events[i].title);
  }
}

console.log(NewYorkEvents);

//Exercise 15
ages = [20, 25, 30, 35];

let agesplus10 = [];

for (i = 0; i < ages.length; i++) {
  agesplus10.push(ages[i] + 10);
}

console.log(agesplus10);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
