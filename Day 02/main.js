// Exercise: Level 1
let challenge = "30 Days Of Javascript";

console.log("console.log ->", challenge);
console.log(".length ->", challenge.length);
console.log(".toUpperCase ->", challenge.toUpperCase());
console.log(".toLowerCase ->", challenge.toLowerCase());
console.log(".substring ->", challenge.substring(3, 7));
console.log(".substring ->", challenge.substring(3,));
console.log(".includes ->", challenge.includes("script"));
console.log(".split ->", challenge.split(" "));

console.log(".replace ->", challenge.replace("Javascript", "Python"));
console.log(".charAt ->", challenge.charAt(15));
console.log(".charCodeAt ->", challenge.charCodeAt("J"));
console.log(".indexOf ->", challenge.indexOf("a"));
console.log(".lastIndexOf ->", challenge.lastIndexOf("a"));
console.log(".indexOf ->", "You cannot end a sentence with because because because is a conjunction".indexOf("because"));
console.log(".indexOf ->", "You cannot end a sentence with because because because is a conjunction".lastIndexOf("because"));
console.log(".indexOf ->", "You cannot end a sentence with because because because is a conjunction".search("because"));
console.log(".trim ->", "30 Days Of Javascript ".trim());

console.log(".startsWith ->", challenge.startsWith("30"));
console.log(".endsWith ->", challenge.endsWith("script"));
console.log(".match ->", challenge.match(/a/g));
console.log(".concat ->", "30 Days of ".concat("Javascript"));
console.log(".repeat ->", challenge.repeat(2));

// Exercise: Level 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);
let ten = '10';
if (typeof ten !== typeof 10) {
    ten = 10;
}

let num = parseFloat('9.8')
if (num !== 10) {
    num = 10;
}

const pythonJargonHasOn = ['python', 'jargon'].map(item => item.includes('on'));

console.log('.includes -> ' + pythonJargonHasOn);

const randomNum = (upperLimit) => Math.floor(Math.random() * upperLimit + 1);
console.log('randon num up to 100 -> ' + randomNum(100));
console.log('randon num between 50 and 100 -> ' + randomNum(50) + 50);
console.log('randon num up to 255 -> ' + randomNum(255));

const js = 'Javascript';
console.log(`'${js}' random char - >` + js.charAt(randomNum(js.length)));

console.log('newline -> \n' + "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 24\n5 1 5 25 125");
console.log('.substring -> ' + "You cannot end a sentence with because because because is a conjunction".substring(31, 54))

// Exercise: Level 3
console.log('love -> ' + 'Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi).length);
console.log('because -> ' + 'You cannot end a sentence with because because because is a conjunction'.match(/because/gi).length);
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence.replace(/[%$@#&;]/g, ''));
console.log(`annual income -> ${12 * (5000 + 15000) + 10000}`);