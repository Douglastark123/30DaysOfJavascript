// Exercise: Level 1
console.log("Exercise: Level 1");
// 1.Declare an empty array;
const empty = [];

// 2.Declare an array with more than 5 number of elements
const nums = [2, 7, 13, 49, 72, 84, 26];

// 3.Find the length of your array
console.log('.length ->', nums.length);

// 4.Get the first item, the middle item and the last item of the array
console.log(nums[0], nums[Math.floor((nums.length / 2) - 1)], nums[nums.length - 1]);

{
    // 5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
    const mixedDataTypes = [54, "lake", false, {}, true, "art", "john"];
    console.log(mixedDataTypes, "->", mixedDataTypes.length);
}

{
    // 6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

    // 7.Print the array using console.log()
    console.log(itCompanies);

    // 8.Print the number of companies in the array
    console.log("The number of companies is " + (itCompanies.length - 1));

    // 9.Print the first company, middle and last company
    console.log(itCompanies[0], itCompanies[Math.floor((itCompanies.length / 2) - 1)], itCompanies[itCompanies.length - 1]);

    // 10.Print out each company
    for (let index = 0; index < itCompanies.length; index++) {
        const element = itCompanies[index];
        console.log(element);
    }

    // 11.Change each company name to uppercase one by one and print them out
    for (let index = 0; index < itCompanies.length; index++) {
        const element = itCompanies[index].toUpperCase();
        console.log(element);
    }

    // 12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    console.log(itCompanies.toString());

    // 13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
    console.log(itCompanies.includes("apple") ? "apple" : "not found");

    // 14.Filter out companies which have more than one 'o' without the filter method
    {
        const itCompaniesWithoutDoubleO = [];
        for (let i = 0; i < itCompanies.length; i++) {
            const company = itCompanies[i];
            let oCounter = 0;

            for (let j = 0; j < company.length; j++) {
                const char = company[j];
                if (oCounter > 1) { break };
                if (char === "o") { oCounter++ };
            }

            if (oCounter < 2) { itCompaniesWithoutDoubleO.push(company) }
        }

        console.log(itCompaniesWithoutDoubleO);
    }

    // 15.Sort the array using sort() method
    {
        itCompanies.sort();
        console.log(itCompanies);
    }

    // 16.Reverse the array using reverse() method
    {
        itCompanies.reverse();
        console.log(itCompanies);
    }

    // 17.Slice out the first 3 companies from the array
    console.log(itCompanies.slice(0, 3));

    // 18.Slice out the last 3 companies from the array
    console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

    // 19.Slice out the middle IT company or companies from the array
    const mid = Math.floor(itCompanies.length / 2)
    console.log(itCompanies.slice(mid, mid + 1));

    // 20.Remove the first IT company from the array
    console.log(itCompanies.shift());

    // 21.Remove the middle IT company or companies from the array
    console.log(...itCompanies.splice(mid, 1));

    // 22.Remove the last IT company from the array
    console.log(itCompanies.pop());

    // 23.Remove all IT companies
    console.log(itCompanies.splice(0, itCompanies.length));
    console.log(itCompanies);
}

// Exercise: Level 2
console.log("Exercise: Level 2");
// 1.Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
import countries from "./countries.js";
import webTechs from "./web_techs.js";

console.log(countries);
console.log(webTechs);


// 2.First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
const words = text.replace(punctuationRegex, "").split(" ");
console.log(words)

// 3.In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
!shoppingCart.includes("Meat") ? shoppingCart.unshift("Meat") : false;
console.log("shoppingCart?Meat ->", shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
!shoppingCart.includes("Sugar") ? shoppingCart.push("Sugar") : false;
console.log("shoppingCart?Sugar ->", shoppingCart);

// remove 'Honey' if you are allergic to honey
let alergicToHoney = true;
alergicToHoney ? shoppingCart.pop() : false;

// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";

console.log("shoppingCart/greenTea ->", shoppingCart);

// 4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.If it does not exist add to the countries list.
countries.includes("Ethiopia") ? console.log("ETHIOPIA") : countries.push("Ethiopia");
console.log("countries?Ethiopia", countries);

// 5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.If it does not exist add Sass to the array and print the array.
if (webTechs.includes("Sass")) {
    console.log("Sass is a CSS prepocess")
} else {
    webTechs.push("Sass");

    console.log(webTechs);
}

// 6.Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);

console.log("fullStack->", fullStack)

// Exercise: Level 3
console.log("Exercise: Level 3");
// 1.The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
const sortedAges = ages.sort();
const minAge = Math.min(...sortedAges)
const maxAge = Math.max(...sortedAges)

console.log("minAge ->", minAge, "; maxAge ->", maxAge);

// Find the median age(one middle item or two middle items divided by two)
const medianAge = !Number.isInteger((sortedAges.length / 2)) ?
    sortedAges[Math.floor((sortedAges.length / 2))] :
    (sortedAges[(sortedAges.length / 2) - 1]
        + sortedAges[(sortedAges.length / 2)]) / 2;

console.log("medianAge->", medianAge);

// Find the average age(all items divided by number of items)
let accumulator = 0;
for (let index = 0; index < sortedAges.length; index++) {
    const element = sortedAges[index];
    accumulator += element;
}

const averageAge = accumulator / sortedAges.length;
console.log("averageAge ->", averageAge);

// Find the range of the ages(max minus min)
const ageRange = maxAge - minAge;
console.log("ageRange ->", ageRange);

// Compare the value of(min - average) and(max - average), use abs() method.
const comparison = [Math.abs((minAge - averageAge)), Math.abs(maxAge - averageAge)]

console.log("comparison ->", ...comparison);

// 2.Slice the first ten countries from the countries array
const firstTenCountries = countries.slice(0, 10)

console.log("firstTenCountries ->", firstTenCountries);

// 3.Find the middle country(ies) in the countries array
const middleCountries = [];
if (Number.isInteger(countries.length / 2)) {
    middleCountries.push(...countries.slice(countries.length / 2 - 1, countries.length / 2 + 1))
} else {
    middleCountries.push(countries[Math.floor(countries.length / 2)])
}

console.log("middleCountries ->", middleCountries);

// 4.Divide the countries array into two equal arrays if it is even. If countries array is not even, one more country for the first half.
const firstHalf = [];
const secondHalf = [];
if (Number.isInteger(countries.length / 2)) {
    firstHalf.push(...countries.splice(0, countries.length / 2));
    secondHalf.push(...countries.splice(0,));
} else {
    firstHalf.push(...countries.splice(0, countries.length / 2 + 1))
    secondHalf.push(...countries.splice(0,))
}

console.log("firstHalf ->", firstHalf);
console.log("seconHalf ->", secondHalf);