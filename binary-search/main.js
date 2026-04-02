const Tree = require('./tree.js')

const BST = new Tree()
BST.root = [1, 2, 3, 4]
BST.insert(4)
BST.insert(5)
console.log(BST.height(3))
console.log(BST.depth(1))
BST.prettyPrint()
