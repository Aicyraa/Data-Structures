import Node from './node.js'

export default class LinkedList {
   // storage for nodes
   head = null
   tail = null

   prepend(value) {
      const newNode = new Node(value)

      // initial set: when there is no head or tail 
      if (this.head === null && this.tail === null) {
         this.head = newNode
         this.tail = newNode
      } else {
         // ONLY WORKS FOR 2 NODES
         this.tail = this.head
         this.head = newNode // set the new node as the head
         this.head.neighbor = this.tail // set the new head "neighbor" to the previous head
      }
   }

   // goal: append a new node, print the nodes
    
   toString() {

      const node1 = {
         data: "dog",
         neighbor: node2 
      }

      const node2 = {
         data: "cat",
         neighbor: node3 
      }

      const node3 = {
         data: "bird",
         neighbor: null
      }

      let current = node1
      let output = ''
      
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
