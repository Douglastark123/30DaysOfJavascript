# 30 Days Of JavaScript: Conditionals
[<< Day 03](../Day%2003/readme.md) | [Day 05 >>]()
![Thirty Days Of Javascript](../images//day_04.png)

- [📔 Day 04](#📔-day-04-recappinng)
   

# 📔 Day 04 (recappinng)
There are 03 ways of implementing conditions in javascript:
- The 'if' structure;
- The 'switch' structure;
- The ternary operator;

```js
let age = Number(prompt('Enter your age:'));

if (age >= 18) alert('You are of legal age.'); // 1-liner if
// OR
if (age >= 18) {
    alert('You are of legal age.');
} // block if
// OR
if (age >= 18) {
    alert('You are of legal age.');
} else {
    alert('You are still a minor.');
} // if-else block
// OR
if (age >= 18) {
    alert('You are of legal age.');
} else if(age < 18 && age > 0) {
    alert('You are still a minor.');
} else {
    alert('Invalid number.');
} // else-if block
// OR
age >= 18 ? alert('You are of legal age.') : alert('You are still a minor.'); // ternary operator

const num = 0;

switch (num) {
    case 0:
        alert(num)
        break;
    case 1:
        confirm(num)
        break;
    default:
        console.log(num)
        break;
    }
```