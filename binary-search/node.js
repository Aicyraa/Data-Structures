/**
 * Represents a node in a binary search tree.
 */
class Node {
   #data
   #left = null
   #right = null

   /**
    * Creates a new Node.
    * @param {*} mid - The data value to store in the node.
    */
   constructor(mid) {
      this.#data = mid
   }

   /**
    * Sets the left child node.
    * @param {Node|null} value - The left child node.
    */
   set left(value) {
      this.#left = value
   }

   /**
    * Gets the left child node.
    * @returns {Node|null} The left child node.
    */
   get left() {
      return this.#left
   }

   /**
    * Sets the right child node.
    * @param {Node|null} value - The right child node.
    */
   set right(value) {
      this.#right = value
   }

   /**
    * Gets the right child node.
    * @returns {Node|null} The right child node.
    */
   get right() {
      return this.#right
   }

   /**
    * Sets the data value of the node.
    * @param {*} value - The data value.
    */
   set data(value) {
      this.#data = value
   }

   /**
    * Gets the data value of the node.
    * @returns {*} The data value.
    */
   get data() {
      return this.#data
   }
}

module.exports = Node
