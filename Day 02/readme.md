# 30 Days Of JavaScript: Data Types
[<< Day 01](../readme.md) | [Day 03 >>](../Day%2003/readme.md)
![Thirty Days Of Javascript](../images//day_02.png)
- [📔 Day 02](#-day-2)
    - [Data Types](#data-types)
        - [Primitive](#primitive)
        - [Non-primitive](#non-primitive)
    - [Numbers](#numbers)
        - [Math Object](#math-object)
    - [Strings](#strings)
    - [Checking and Converting Data Types](#checking-and-converting-data-types)

# 📔 Day 02 (recappinng)
## Data Types
Data types can be divided into two categories:

### Primitive:

- Numbers - Integers, floats;
- Strings - Any data under single quote, double quote or backtick quote;
- Booleans - true or false value;
- Null - empty value or no value;
- Undefined - a declared variable without a value;
- Symbol - A unique value that can be generated by Symbol constructor;

example:
```js
const firstNum = 4
const secondNum = 3.7
const secondNum = -4
const secondNum = -10.9

const js = "Javascript";
const py = "Python";

const hasApple = true;
const isDead = false;
```

### Non-primitive:

- Objects;
- Arrays;

example:
```js
const nums = [0, 1, 2, 3];

const user = {
    id: 01,
    name: "Douglas Antunes da Silva",
    country: "Brazil"
}
```

## Numbers
```js
const num = 35;

num.toExponential(); // Returns a string containing a number represented in exponential notation.
num.toFixed(1); // Returns a string with fixed amount of number after the point.
num.toLocaleString(); // Converts a number to a string by using the current or specified locale.
num.toPrecision(4); // Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
num.toString(); // Returns a string representation of an object.
num.valueOf(); // Returns the primitive value of the specified object.
```

### Math Object
```js
Math.PI // 3.141592653589793
Math.round(3.14); // Rounds value to the nearest integer.
Math.floor(3.14); // Rounds the value downwards.
Math.ceil(3.14); // Rounds the value upwards.
Math.min(3.14); // Returns the lowest value received.
Math.max(3.14); // Returns the highest value received.
Math.random(); // Creates a pseudorandom number between 0 and 1.
Math.abs(-10); // Returns the absolute value of a number.
Math.sqrt(4); // Returns the square root of a number.
    Math.SQRT1_2; // Returns the square root of 0.5.
    Math.SQRT2; // Returns the square root of 2.
Math.pow(2, 2); // Exponentiation.
Math.E; // Euler's number.
Math.log(5); // Returns the logarithim of a number.
    Math.LN2; // Returns the natural logarithim of 2.
    Math.LN10; // Returns the natural logarithim of 10.
Math.sin(100); // Returns the sine of a number.
Math.cos(100); // Returns the cosine of a number.
```

## Strings
|     Escape Sequences      |
| :-----------------------  |
| \n: new line              |
| \t: Tab, means 8 spaces   |
| \\\\: Back slash          |
| \\': Single quote (')     |
| \\": Double quote (")     |


```js
let space = " "; // an empty space string
let firstName = "Douglas"
let lastName = "Antunes da Silva"

let greeting = "Hello," + space + firstName   // (ES5 string addition)

let fullName = `${firstName} ${lastName}`; // (ES6 template literals)

fullName.length; // Returns the length of the string.
fullName[0]; // Like any array, returns the respective string character.
fullName.toUpperCase(); // Returns the String object in uppercase format.
fullName.toLowerCase(); // Returns the String object in lowercase format.
fullName.substring(0, 6); // Returns the substring at the given coordinates within a String object.
fullName.split(" "); // Split a string using the specified separator and return them as an array.
fullName.trim(); // Returns the string with the spaces at its begining and end removed.
fullName.includes("douglas"); // Checks if the string contains a given substring.
fullName.replace("Antunes da Silva", "A. da Silva"); // Returns the string, with the given 1st parameter substituted by the 2nd.
fullName.charAt(5); // Returns the character at the given string index.
fullName.charCodeAt(5); // Returns the unicode value of the character at the given string index, or NaN if index does not exist.
fullName.indexOf("Antunes"); // Returns the position of the first occurrence of a given substring.
fullName.lastIndexOf("Antunes"); // Returns the position of the last occurrence of a given substring.
firstName.concat(space, lastName) // Returns a string that contains the concatenation of two or more strings.
firstName.startsWith("Dou") // Returns true if the string starts exactly like the given parameter.
firstName.endsWith("Dou") // Returns true if the string ends exactly like the given parameter.
firstName.search(/Douglas/g) // Return the index of the first match of a given regular expression.
firstName.match(/a/gi) // Return an array with all the results that match the given regular expression.
firstName.repeat(3) // Returns the original string times the given parameter appended together as a single string.
```

## Checking and Converting Data Types
```js
typeof "hello"; // Returns the data type of a given parameter.
parseInt("10") || Number("10") // String to integer.
parseFloat("3.14") || Number("3.14") // String to float.
parseInt(3.14) // float to integer.
```

[<< Day 01](../readme.md) | [Day 03 >>](../Day%2003/readme.md)