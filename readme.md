# 30 Days Of JavaScript
My journey with the '30 Days Of Javascript' challenge

| Day |                 Topics                  |
| --- | :-------------------------------------: |
| 01  |    [Introduction](./readme.md)  |
| 02  |    [Data Types](./Day%2002/readme.md)     |
| 03  |    [Boolean, Operators, Date](./Day%2003/readme.md)     |
| 04  |    [Conditionals](./Day%2004/readme.md)     |
| 05  |    [Arrays](./Day%2005/readme.md)     |
| 06  |    [Loops](./Day%2006/readme.md)     |
| 07  |    [Functions](./Day%2007/readme.md)     |
| 08  |    [Objects](./Day%2008/readme.md)     |
| 09  |    [Higher Order Functions](./Day%2009/readme.md)     |
| 10  |    [Sets & Maps](./Day%2010/readme.md)     |
| 11  |    [Destructuring & Spreading](./Day%2011/readme.md)     |
| 12  |    [Regular Expressions](./Day%2012/readme.md)     |
| 13  |    [Console Object Methods](./Day%2013/readme.md)     |
| 14  |    [Error Handling](./Day%2014/readme.md)     |
| 15  |    [Classes](./Day%2015/readme.md)     |
| 16  |    [JSON](./Day%2016/readme.md)     |
| 17  |    [Web Storages](./Day%2017/readme.md)     |
| 18  |    [Promises](./Day%2018/readme.md)     |
| 19  |    [Closure](./Day%2019/readme.md)     |
| 20  |    [Clean Code](./Day%2020/readme.md)     |

---
# 30 Days Of JavaScript: Introduction
[Day 02 >>](./Day%2002/readme.md)
![Thirty Days Of Javascript](./images/day_01.png)

- [30 Days Of Javascript](#30-days-of-javascript)
- [📔 Day 01](#📔-day-1)
    - [Comments](#comments)
    - [Arithmetic](#arithmetic)
    - [Adding Scripts](#adding-scripts)
    - [Basic Data Types](#basic-data-types)
    - [Variables](#variables)
        - [Naming](#naming)
        - [Creating variables](#creating-variables)

# 📔 Day 01 (recapping)
```js
console.log("Hello World !");
console.log("Hello", "World", "!");
console.log("Hello" + "World" + "!");
```

## Comments:
```js
// This is a line comment.
/*
 This is
    a multiline
        comment.
*/
```
## Arithmetic:
```js
2 + 3; // Addition
3 - 2; // Subtraction
2 * 3; // Multiplication
3 / 2; // Division
3 % 2; // Modulus - finding the remainder of a division
3 ** 2; // Exponentiation
```
## Adding scripts:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript:Inline Script</title>
    <!--external script example-->
    <script src="./example.js" defer></script>
  </head>
  <body>
    <!--inline script example-->
    <button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>
    <!--internal script example-->
    <script>
        console.log("Welcome to 30 days of javascript!")
    </script>
    <!--external script example-->
    <script src="./example.js"></script>
  </body>
</html>
```
## Basic data types:
javascript basic data types are:
```js
// numbers, string, booleans, undefined & null

// example:
// string
'hello world!'

// number
5
10.4
-4
-8.7

// undefined
let firstName;
firstName; // undefined, because it has no value assigned to yet

// null
let emptyValue = null

// obs: can check the data type of ... with
typeof 
```
## Variables
### Naming
A valid JavaScript variable name must follow the following rules:

- A JavaScript variable name should not begin with a number.
- A JavaScript variable name does not allow special characters except dollar sign and underscore.
- A JavaScript variable name should not have space between words.

> Note: these are the intrinsic variable naming rules of javascript; other rules like like following the camelCase convention is more a question of style and for the sake of consistency than anything else.

Example of valid variable names:
```js
firstName
lastName
country
city
capitalCity
age
isMarried

first_name
last_name
is_married
capital_city

num1
num_1
_num_1
$num1
year2020
year_2020
```

Example of invalid variable names:
```js
  first-name
  1_num
  num_#_1
```
### Creating variables
```js
// There are currently 3 ways to create variables which is derived from using the 3 keywords
var
const
// and
let
```
- var - the old way;
- const - for non-changing values;
- let

> Note: as the newer way, both 'const' and 'let' also has the characteristic of respecting the scope in which they are declared. So they are recomended to be used over 'var'.

[Day 02 >>](./Day%2002/readme.md)