import Node from './node.js'

export default class LinkedList {

   constructor (...values) {
      this.head = values || null
   }

   prepend(value) {
      const newNode = new Node(value)
      var nextNode = null

      nextNode = this.head
      this.head = newNode
      this.head.neighbor = nextNode
   }

   append(value) {
      const newNode = new Node(value)
      var currentNode = this.head

      while (true) {
         if (currentNode.neighbor) {
            currentNode = currentNode.neighbor
            continue
         } else {
            currentNode.neighbor = newNode
            break
         }
      }
   }

   size() {
      var currentNode = this.head
      var size = 0
      
      if (!currentNode) return size
      while (true) {
         if (currentNode.neighbor) {
            currentNode = currentNode.neighbor
            ++size
            continue
         } else {
            break
         }
      }

      return size
   }

   toString() {
      var current = this.head
      var output = ''

      while (true) {
         if (current) {
            output += `( ${current.data} ) -> `
            current = current.neighbor
         } else {
            output += 'null'
            break
         }
      }

      return output
   }
}
