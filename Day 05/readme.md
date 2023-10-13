# 30 Days Of JavaScript: Arrays
[<< Day 04](../Day%2004/readme.md) || [Day 06 >>](../Day%2006/readme.md)
![Thirty Days Of Javascript](../images//day_05.png)

- [📔 Day 05](#📔-day-05-recappinng)
    - [Arrays](#arrays)
        - [Creating one / basics](#creating-array--basics)
            - [Constructor](#array-constructor)
            - [String is very ...](#string-is-very-simillar-to-an-array)
            - [getting arr length](#getting-the-length)
            - [the Index](#the-index)
        - [Manipulating array](#manipulating-array)
            - [.fill()](#fill---based-on-index-replaces-values-for-static-value)
            - [Other methods](#other-methods)
        - [Multidimensional array](#multidimensional-array)
# 📔 Day 05 (recappinng)
## Arrays
> Note:. In Javascript, arrays are '0-index' based.
### Creating array (* basics)
> Note:. It is most recomended to use 'const' for creating an array.

- Using square brackets([])
```js
const arr0 = []; // empty array
const arr1 = [ "hello", 5, "maine", 8, {
    country: 'Brazil',
    city: 'Belo Horizonte'
}];
```
#### Array constructor
```js
const arr = new Array(); // empty array
const arr0 = new Array(8); // empty x 8
const arr1 = new Array(0, "hello"); // [0, "hello"]
const arr2 = new Array(4).fill(2); // [2, 2, 2, 2]
```

#### String is very simillar to an array
```js
// so you can actually convert it into a proper one
const strArr = "hello world!".split("")
```

#### getting the length
```js
const fruits = ['banana', 'orange', 'mango', 'lemon'];
fruits.length; // returns the length of the array
```

#### the index
```js
const fruits = ['banana', 'orange', 'mango', 'lemon'];
let firstFruit = fruits[0]; // we are accessing the first item using its index

// also
fruits[fruits.length] = "melon"; // in this case 'fruits.length' equals 4; setting 'melon' as the value for the 4th position

// also
fruits[2] = "coconut"; // in this case we are replacing the value 'mango' for 'coconut'
```

### Manipulating array

#### .fill() - based on index replaces values for static value
```js
[0, 1, 2, 3].fill(15); // subtitutes all values for '15'
[0, 1, 2, 3].fill(15, 2); // from the index '2' onnwards subtitutes all values for '15'
[0, 1, 2, 3].fill(15, 2, 3); // from the index '2' to '3' subtitutes all values for '15'
```

#### Other methods
```js
const test = [1, 2, 'hello', 7, 42, 'alessa', 'melissa', 'a', 20]
test.concat([3, 4, 5]); // returns concatenated version of two or more arrays.
test.indexOf("melissa"); // returns the index number of given value; note:. returns -1 in case value does not exist in array.
test.lastIndexOf("a"); // returns the index number of the given value that is closest to the end of the array; note:. returns -1 in case value does not exist in array.
test.includes("a"); // returns boolean value representing if array does, or not, include a given value.
Array.isArray(test); // returns boolean value representing if given value is, or not, an array.
test.toString(); // returns a stringified version of an array.
test.join(); // returns a stringified version of an array, with a fixed given value used as the in-between items, the default value being a ",".
test.slice(1, 3); // returns a new array composed of the items of given position to another from the given array.
test.splice(2, 2, 4, 20); // removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
test.push("Last name"); // append given values at the bottom of the array.
test.pop(); // removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
test.shift(); // removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
test.unshift("First name"); // append given values at the begining of the array.
test.reverse(); // returns the same array in a reverse order. FYI, pretty obvious, no, 😓.
test.sort(); // sorts the array, based on a given callback function; eg:. ascending, descending, others.
```

### Multidimensional array
Now, for the last piece, 😉, a 'Multidimensional array'; in simple terms, an array with various levels. eg:.
```js
const test = [[]]
const arr = [[0, 2, 3], [{ name: 'Ashley', age: 24, country: 'USA' }]]
```

[<< Day 04](../Day%2004/readme.md) || [Day 06 >>](../Day%2006/readme.md)