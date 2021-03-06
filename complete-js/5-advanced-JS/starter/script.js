// Function constructor

// object literal
// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// function constructor pattern for writing a blue print
// these should always be capitalized
// pass in the parameters that are the variables that you want to set

/* var Person = function(name, yearOfBirth, job) {
    // this.name equals the name, which is a parameter of the function
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
*/

// instead of adding a method inside of the Person constructor, you can create it using the prototype property. This way the methods are pulled out of the constructor and kept separate. Easier to maintain, understand, read, use. The instances won't have the calculateAge method attached to them but they will have ACCESS to it via the prototype property.

/*
Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}
*/

// instantiation
// create new objects using a constructor. instances of the Person object
// new keyword creates an empty function, then the constructor function is called, point the 'this' keyword to the new instance
// if constructor function does not return anything, the result is the object that was created in the first step... now has the properties that we defined then assigned to john variable.
/*var john = new Person('John', 1990, 'teacher');

// more people
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

// INHERITANCE
// add method to object
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// can do the same thing for properties as methods but not as common.. not directly in constructor but can access through prototype property
Person.prototype.lastName = 'Smith';

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


// create constructor object
var Outfit = function(top, bottom, underwear, socks, shoes) {
    this.top = top;
    this.bottom = bottom;
    this.underwear = underwear;
    this.socks = socks;
    this.shoes = shoes;
}

// create a prototype for method
Outfit.prototype.calculateAccessory = function() {
    if (this.top === 'shirt') {
        this.accessory = 'hat';
        console.log(this.accessory);
    } else {
        this.accessory = 'necklace';
        console.log(this.accessory);
    }
}

// create a prototype for property
Outfit.prototype.outerwear = 'jacket';

// create 3 instances of the constructor object
var jonathan = new Outfit('shirt', 'pants', 'boxer briefs', 'black', 'chukka boots');

var charly = new Outfit('blouce', 'jeans', 'lace', 'none', 'sandals');

jonathan.calculateAccessory();
console.log(jonathan);

charly.calculateAccessory();
console.log(charly);

console.log(jonathan.outerwear);
console.log(charly.outerwear);

console.log(charly);
*/

/*************************************
Section 5, lesson 63
Creating Objects: Object.create
*************************************/

// Object.create
// Define an object that will act as prototype then create an object based on that prototype

// Object.create builds an object that inherits directly from the one we passed into the first argument. You can directly specify which object should be a prototype.

// Whereas the function constructor pattern, the newly created object inherits from the constructor's prototype property

// write protoype as simple object

/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);

// manually add each property
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});
*/

/*************************************
Section 5, lesson 64
Primitives vs. Objects
*************************************/

// variables containing primitives hold data inside of var itself
// primitives
/*var a = 23;
var b = a;

a = 46;

console.log(a);
console.log(b);


// vars associated w objects don't contain the object, they contain a reference to the place in memory to where the object is stored. Does not have a real copy of the object, just points to the object

// objects

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age); // 30
console.log(obj2.age); // 26


// functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco'
}

change(age, obj);

console.log(age); // 27, primitive remained unchanged
console.log(obj.city); // San Francisco, object changed to new city
*/


/*************************************
Section 5, lesson 65
First class functions: passing
functions as arguments
*************************************/
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(array, callback) {
    // loop over array and return a result
    // create new empty array
    var arrayResult = [];

    for (var i = 0; i < array.length; i++) {
        // push into array - result of invoking callback function and pass current element array[i]
        // callback is a callback function
        arrayResult.push(callback(array[i]));
    }
    // return result of array
    return arrayResult;
}

function calculateAge(element) {
    return 2016 - element;
}

// is someone full age
function isFullAge(element) {
    // return true or false
    return element >= 18;
}

// max heart rate
function maxHeartRate(element) {
    if (element >= 18 && element <= 81) {
        // round to nearest integer
        return Math.round(206.9 - (0.67 * element));
    } else {
        return -1;
    }
}

// pass "calculateAge" callback function as parameter
// but we are not invoking it now (or else it would have "()")
var ages = arrayCalc(years, calculateAge);
// check to see if someone is full age
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(fullAges);
console.log(rates);
*/
/*************************************
Section 5, lesson 66
First class functions: functions
returning functions
*************************************/

// creates diff interview questions
// each job return function that builds a string using the person's name as an input
// function returning another function

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        // anonymous function
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher'){
        return function(name) {
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

// store result
// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('John');
// designerQuestion('Jane');
// designerQuestion('Mark');

// ORRR easier just call both functions bc it's evaluated from left to right
interviewQuestion('teacher')('Mark');
*/

// make decision about dice depending on the number that was thrown
/* USE THIS FOR DICE APP */
/*
function rollDice(diceNumber) {
    console.log(diceNumber);
    // if 1 or 5, keep rolling
    if (diceNumber === 1 || diceNumber === 5) {
        return function(name) {
            console.log('keep rolling, ' + name);
        }
    } else {
        // otherwise, lose turn
        return function(name) {
            console.log('sorry ' + name + ', your turn is over');
        }
    }
}

function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max-min)) + min;
}

rollDice(getRandomInteger(1, 6))('Jonathan');
rollDice(getRandomInteger(1, 6))('Charly');
*/





/*************************************
Section 5, lesson 67
First class functions: advanced js
objects functions

IIFE - immediately invoked function
expressions
*************************************/

// Example of IIFE
// Used for data privacy not for reusable code .. cannot access from outside scope
// trick JS parser into thinking it's a function expression and not a function declaration
// put parenthesis around function then add () to invoke it

/*(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();*/

// can no longer access 'score' variable outside of IIFE
// console.log(score); // score is not defined

// use params
/*(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);*/




/*************************************
Section 5, lesson 68
First class functions: advanced js
objects functions

Closures
*************************************/

// Closure is when the variables from an outer function that was already returned is still available for the inner function
// "An inner function always has access to the variables and parameters of its outer function, even after the outer function has returned."


// function return function which calculates how many years until retirement

/*function retirement(retirementAge) {
    var a = ' years left until retirement.'
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
*/
// or
// retirement(66)(1990);



// refactor interview function to use closures below
/*function interviewQuestion(job) {
    if (job === 'designer') {
        // anonymous function
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher'){
        return function(name) {
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}*/

// refactor interview function to use closures
/*function interviewQuestion(job) {
    var designerDescription = ', can you please explain what UX design is?';
    var teacherDescription = ', what subject do you teach?';
    var alternateDescription = ', what do you do?';

    return function(name) {
        if (job === 'designer') {
            console.log(name + designerDescription);
        } else if (job === 'teacher') {
            console.log(name + teacherDescription);
        } else {
            console.log(name + alternateDescription);
        }
    }
}

var designerQuestion = interviewQuestion('designer');
var teacherQuestion = interviewQuestion('teacher');
var alternateQuestion = interviewQuestion('carpenter');

designerQuestion('John');
teacherQuestion('Mark');
alternateQuestion('Jane');
*/





/*************************************
Section 5, lesson 69
First class functions: advanced js
objects functions

Bind, call and apply
*************************************/

/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

// "call" method can be used to set the 'this' keyword as our first argument
// "method borrowing" because we are borrowing the "presentation" method from the "john" object
john.presentation.call(emily, 'friendly', 'afternoon');



// "apply" method - accepts arguments as an array
// john.presentation.apply(emily, ['friendly', 'afternoon']);



// "bind" method allows us to set the this variable explicity and will return a function, but it generates a copy of the function so we can store it somewhere.. will get stored in friendly.
// "bind" allows us to preset some arguments

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

*/


// example from earlier
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(array, callback) {
    var arrayResult = [];

    for (var i = 0; i < array.length; i++) {
        arrayResult.push(callback(array[i]));
    }
    return arrayResult;
}

function calculateAge(element) {
    return 2016 - element;
}

function isFullAge(limit, element) {
    return element >= limit;
}

var ages = arrayCalc(years, calculateAge);

// bind method always has to have this keyword first
// this will be a copy of the isFullAge function with 20 as the preset argument for "limit"
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);

*/


/* Code challenge 7 */

/* MY ORIGINAL ANSWER W/STRING
// Question constructor
(function(){
    var Question = function(question, answerChoices, correctAnswer) {
        this.question = question;
        this.answerChoices = answerChoices;
        this.correctAnswer = correctAnswer;
    }

    // create a few questions from constructor
    var cityQuestion = new Question('Which is the largest city?', ['New York', 'Miami', 'San Francisco'], 'New York');

    var transportationQuestion = new Question('What mode of transportation is the most fun?', ['Bus', 'Subway', 'Bike'], 'Bike');

    var seasonQuestion = new Question('What\'s the best season?', ['Spring', 'Summer', 'Fall', 'Winter'], 'Summer');

    // store Questions in array
    var questionsArray = [cityQuestion, transportationQuestion, seasonQuestion];

    console.log(questionsArray);

    console.log(Math.round(Math.random() * 2));


    Question.prototype.chooseRandomQuestion = function() {
        console.log(this.question);
        console.log(this.answerChoices);
        console.log(this.correctAnswer);

        var userAnswer = window.prompt(this.question + ' ' + this.answerChoices);

        console.log(userAnswer);

        if (userAnswer === this.correctAnswer) {
            console.log('Correct!');
        } else {
            console.log('NOPE!');
        }
    }

    // pick random question
    questionsArray[Math.round(Math.random() * 2)].chooseRandomQuestion();
})();
*/

/* Advanced code challenge */
(function(){
    var score;

    // constructor
    var Question = function(question, answerChoices, correctAnswer) {
        this.question = question;
        this.answerChoices = answerChoices;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.chooseRandomQuestion = function() {
        console.log(this.question);
        console.log(this.answerChoices);
        console.log(this.correctAnswer);

        for (var i = 0; i < this.answerChoices.length; i++) {
            console.log(i + ': ' + this.answerChoices[i]);
        }
    }

    Question.prototype.checkAnswer = function(answer, callback) {
        if (answer === this.correctAnswer) {
            console.log('Correct!');
            score = callback(true);
        } else {
            console.log('NOPE! Please try again');
            score = callback(false);
        }

        this.displayScore(score);
    }

    // display score
    Question.prototype.displayScore = function(checkScore) {
        console.log('Your current score is: ' + checkScore);
        console.log('-------------------------------');
    }

    // create a few questions from constructor
    var cityQuestion = new Question('Which is the largest city?', ['New York', 'Miami', 'San Francisco'], 0);

    var transportationQuestion = new Question('What mode of transportation is the most fun?', ['Bus', 'Subway', 'Bike'], 2);

    var seasonQuestion = new Question('What\'s the best season?', ['Spring', 'Summer', 'Fall', 'Winter'], 1);

    // store Questions in array
    var questionsArray = [cityQuestion, transportationQuestion, seasonQuestion];

    function checkScore() {
        score = 0;

        return function(isCorrect) {
            if (isCorrect) {
                score++;
            }

            return score;
        }
    }

    var keepScore = checkScore();

    function showNextQuestion() {
        var randomNumber = Math.floor(Math.random() * questionsArray.length);

        // this will give us random number
        questionsArray[randomNumber].chooseRandomQuestion();

        var userAnswer = prompt('Please select the correct answer.');

        if (userAnswer === 'exit') {
            console.log('exit program');
        } else {
            userAnswer = parseInt(userAnswer);

            questionsArray[randomNumber].checkAnswer(userAnswer, keepScore);

            showNextQuestion();
        }
    }

    showNextQuestion();
})();

