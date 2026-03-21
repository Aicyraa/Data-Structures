import HashMap from "./hashTable.js";

const hashMap = new HashMap()

hashMap.set('apple', 'red')
hashMap.set('banana', 'yellow')
hashMap.set('carrot', 'orange')
hashMap.set('dog', 'brown')
hashMap.set('elephant', 'gray')
hashMap.set('frog', 'green')
hashMap.set('grape', 'purple')
hashMap.set('hat', 'black')
hashMap.set('ice cream', 'white')
hashMap.set('jacket', 'blue')
hashMap.set('kite', 'pink')
hashMap.set('lion', 'golden')

console.log("Keys");
console.log(hashMap.keys());
console.log("Entries");
console.log(hashMap.entries());
console.log("Values");
console.log(hashMap.values());
console.log(hashMap.size());



[]