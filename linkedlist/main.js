import LinkedList from "./linkedlist.js"

const list = new LinkedList()
list.prepend("Dog")
list.prepend("Cat")
list.prepend("Bird")
list.prepend("Lion")
list.append("Monkey")

console.log(list.toString());
console.log(list.size());
console.log(list.head);
console.log(list.tail);
console.log(list.at(3));
console.log(list.at(5));
console.log(list.pop());
console.log(list.toString());
console.log(list.contains("Dog"));
console.log(list.contains("Tiger"));
console.log(list.indexOf("Dog"));
console.log(list.indexOf("Tiger"));
list.insertAt(2, "Whale", "Shark");
console.log(list.toString());
list.removeAt(2);
console.log(list.toString());



