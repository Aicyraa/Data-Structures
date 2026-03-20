import Node from './node.js'

export default class LinkedList {
   constructor() {
      this.currentHead = null
   }

   prepend(value) {
      const newNode = new Node(value)
      var nextNode = null

      nextNode = this.currentHead
      this.currentHead = newNode
      this.currentHead.neighbor = nextNode
   }

   append(value) {
      const newNode = new Node(value)
      var currentNode = this.currentHead

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
      var currentNode = this.currentHead
      var size = 0

      if (!this.currentHead) return size

      while (true) {
         if (currentNode.neighbor) {
            currentNode = currentNode.neighbor
            ++size
            continue
         } else {
            ++size
            break
         }
      }

      return size
   }

   at(index) {
      var currentNode = this.currentHead
      var currentIndex = 0

      while (true) {
         if (currentNode.neighbor === null) {
            return undefined
         }

         if (index === currentIndex) {
            return currentNode.data
         }

         currentNode = currentNode.neighbor
         currentIndex++
      }
   }

   pop() {
      var prevHeadData = this.currentHead.data
      this.currentHead = this.currentHead.neighbor
      return prevHeadData
   }

   contains(value) {
      var currentNode = this.currentHead
      while (true) {
         if (currentNode.data === value) {
            return true
         } else if (currentNode.data !== value && currentNode.neighbor === null) {
            return false
         } else {
            currentNode = currentNode.neighbor
         }
      }
   }

   indexof(value) {
      var currentNode = this.currentHead
      var index = 0
      while (true) {
         if (currentNode.data === value) {
            return index
         } else if (currentNode.data !== value && currentNode.neighbor === null) {
            return -1
         } else {
            index++
            currentNode = currentNode.neighbor
         }
      }
   }

   get head() {
      var currentHead = this.currentHead
      return currentHead.data
   }

   get tail() {
      var currentNode = this.currentHead
      while (true) {
         if (currentNode.neighbor) {
            currentNode = currentNode.neighbor
            continue
         } else {
            return currentNode.data
         }
      }
   }

   toString() {
      var current = this.currentHead
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
