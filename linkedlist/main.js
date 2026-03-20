import LinkedList from "./linkedlist.js"

const list = new LinkedList()
list.prepend("Dog")
list.prepend("Cat")
list.prepend("Bird")
list.prepend("Lion")
// list.append("Aali")

console.log(list.toString());
console.log(list.size());


