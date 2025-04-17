let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
let intFruits = new Array ["kiwi", "dragonfruit", "pear", "peach"];

console.log(fruits);
console.log(intFruits);

fruits[0] = "mango";
console.log(fruits[0]); // mango

fruits.push("watermelon");
console.log(fruits); // ["mango", "banana", "orange", "grape", "kiwi", "watermelon"]

fruits.unshift("strawberry");
console.log(fruits); // ["strawberry", "mango", "banana", "orange", "grape", "kiwi", "watermelon"]

fruits.pop();
console.log(fruits); // ["strawberry", "mango", "banana", "orange", "grape", "kiwi"]