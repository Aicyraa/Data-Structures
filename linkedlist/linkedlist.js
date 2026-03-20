import Node from './node.js'

export default class LinkedList {
   constructor() {
      this.head = null
   }

   prepend(value) {
      const newNode = new Node(value)
      var nextNode = null

      if (this.head === null) {
         // initial set: when there is no head
         this.head = newNode
      } else {
         // set the previous head to "nextNode" ->
         // set the "newNode" to the head ->
         // set the "nextNode" to be the neighbor of the head
         nextNode = this.head
         this.head = newNode
         this.head.neighbor = nextNode
      }
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
