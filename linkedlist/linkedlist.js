import Node from './node.js'

export default class LinkedList {
   
   #traverse(callback) {
      var node = this.currentHead
      while (node) {
         const result = callback(node)
         if (result !== undefined) return result
         node = node.neighbor
      }

      return undefined
   }

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
      let count = 0
      this.#traverse(() => { count++ })
      return count
    }

   at(index) {
      let i = 0
      return this.#traverse(node => {
         if (i++ === index) return node.data
      })
   }

   pop() {
      var prevHeadData = this.currentHead.data
      this.currentHead = this.currentHead.neighbor
      return prevHeadData
   }

   contains(value) {
      return (
         this.#traverse(node => {
            if (node.data === value) return true
         }) ?? false
      )
   }

   indexOf(value) {
      let index = 0
      return (
         this.#traverse(node => {
            if (node.data === value) return index
            index++
         }) ?? -1
      )
   }

   insertAt(index, ...values) {
      function insert(index, value) {
         var newNode = new Node(value)
         var currNode = this.currentHead
         var currIndex = 0

         while (true) {
            if (currIndex === index) {
               var nextNode = currNode.neighbor
               currNode.neighbor = newNode
               newNode.neighbor = nextNode
               break
            }

            currNode = currNode.neighbor
            currIndex++
         }
      }

      insert = insert.bind(this)

      for (const value of values) {
         insert(index++, value)
      }
   }

   removeAt(index) {
      if (index === 0) {
         this.currentHead = this.currentHead.neighbor
         return
      }

      var currNode = this.currentHead
      var currIndex = 0

      while (currNode.neighbor) {
         if (currIndex === index - 1) {
            currNode.neighbor = currNode.neighbor.neighbor
            return
         }

         currNode = currNode.neighbor
         currIndex++
      }
   }

   get head() {
      var currentHead = this.currentHead
      return currentHead.data
   }

   get tail() {
      return this.#traverse(node => {
        if (!node.neighbor) return node.data
      })
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
