# 30 Days Of JavaScript: Boolean, Operators, Date
[<< Day 02](../Day%2002/readme.md) | [Day 04 >>](../Day%2004/readme.md)
![Thirty Days Of Javascript](../images//day_03.png)

- [📔 Day 03](#📔-day-03-recappinng)
    - [Booleans, Undefined & Null](#booleans-undefined--null)
    - [Operators](#operators)
        - [Assignment](#assignment)
        - [Arithmetic](#arithmetic)
        - [Comparison](#comparison)
        - [Logical](#logical)
    - [Window Methods & Date Object](#window-methods--date-object)
        - [Window](#window)
        - [Date Object](#date-object)

# 📔 Day 03 (recappinng)
## Booleans, Undefined & Null
```js
let t = true
let f = false
let bigger = 4 > 3 // true
let smaller = 4 < 3 // false
```

Now, there are truthy & falsy values:

| Truthy | Falsy |
| :---: | :-------------------------------------: |
| All numbers except zero.  |   0 |
| All strings except empty ones.  | "" |
| true  | false |
|   | undefined |
|   | null |
|   | NaN |

```js
let firstName; // undefined, because it is not assigned to a value yet.
let empty = null; // null, means no value.
```

## Operators
### Assignment
| Operator | Function |
| :------: | :------: |
| =  |   assignment |
| +=  |   assign current plus given value |
| -=  |   assign current minus given value |
| *=  |   assign current times given value |
| /=  |   assign current divided by given value |
| %=  |   assign remainder of current divided by given value |
| **=  |   assign remainder of current divided by given value |

### Arithmetic
| Operator | Function |
| :------: | :------: |
| + |   add |
| - |  subtract |
| * |   multiply |
| / |   division |
| % |   modulus |
| ** |   exponential |

### Comparison
| Operator | Function |
| :------: | :------: |
| == |   equal: in value only |
| === |   strictly equal: in value and data type |
| != |   not equal |
| > |   greater than |
| < |   less than |
| >= |   greater than or equal to |
| <= |   less than or equal to |

### Logical
| Operator | Function |
| :------: | :------: |
| && |   AND |
| \|\| |   OR |
| ! |   false (obs: inverse value) |

Others
```js
let i = 10;
++i // pre-increment
i++ // post-increment
--i // pre-decrement
i-- // post-increment

condition ? true : false // ternary operator
```
## Window Methods & Date Object
### Window
> Note: These methods are supposed to run on the browser.

```js
alert("Hello world!") // Builtin method, display a popup box with a given message and an 'Ok' button before loading the page.
prompt("Hello world!") // Builtin method, display a popup box with a given message, an input, an 'Ok' and a 'Cancel' button before loading the page.
confirm("Hello world!") // Similar to the previous one, but without the input.
```

### Date Object

```js
const now = new Date();

now.getFullYear(); // Returns year.
now.getMonth(); // Returns month. (obs:. 0 number index)
now.getDate(); // Returns day of the month.
now.getDay(); // Returns day of the week. (obs:. 0 number index)
now.getDay(); // Returns day of the week.
now.getHours(); // Returns hour.
now.getMinutes(); // Returns minutes.
now.getSeconds(); // Returns seconds.
now.getTime(); // Returns time in seconds since January 01, 1970 UTC.
```

[<< Day 02](../Day%2002/readme.md) | [Day 04 >>](../Day%2004/readme.md)