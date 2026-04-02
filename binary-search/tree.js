const Node = require('./node')

/**
 * Represents a binary search tree with insert, delete, and search capabilities.
 */
class Tree {
   #root = null

   /**
    * Sorts an array using merge sort algorithm.
    * @private
    * @param {number[]} arr - The array to sort.
    * @returns {number[]} The sorted array.
    */
   #sort(arr) {
      if (arr.length === 1) {
         return arr
      }

      const mid = Math.floor(arr.length / 2)
      const left = this.#sort(arr.slice(0, mid))
      const right = this.#sort(arr.slice(mid))

      let l = 0,
         r = 0,
         result = []

      while (l < left.length && r < right.length) {
         if (left[l] <= right[r]) {
            result.push(left[l++])
         } else {
            result.push(right[r++])
         }
      }

      return [...result, ...left.slice(l), ...right.slice(r)]
   }

   /**
    * Builds a balanced BST from a sorted array.
    * @private
    * @param {number[]} arr - The sorted array.
    * @returns {Node|null} The root node of the constructed subtree.
    */
   #buildTree(arr) {
      if (arr.length === 0) {
         return null
      }

      const mid = Math.floor(arr.length / 2)
      const root = new Node(arr[mid])
      root.left = this.#buildTree(arr.slice(0, mid))
      root.right = this.#buildTree(arr.slice(mid + 1))

      return root
   }

   /**
    * Finds the in-order successor of a node (minimum value in right subtree).
    * @private
    * @param {Node} node - The node to find successor for.
    * @returns {{successorParent: Node, successor: Node}} The successor node and its parent.
    */
   #findSuccessor(node) {
      let successorParent = node
      let successor = node.right
      while (successor.left !== null) {
         successorParent = successor
         successor = successor.left
      }
      return { successorParent, successor }
   }

   /**
    * Counts the height from node to leaf node
    * @param {Node} node - The target node
    * @returns {number} The height of the node
    *  */
   #countHeight(node) {
      if (node === null) {
         return -1
      }

      const left = this.#countHeight(node.left)
      const right = this.#countHeight(node.right)

      return 1 + Math.max(left, right)
   }

   /**
    * Recursively checks balance and returns height in one pass.
    * Returns -1 if any subtree is unbalanced (sentinel), otherwise
    * returns the true height of the subtree rooted at node.
    * @private
    * @param {Node|null} node - The current node
    * @returns {number} Height of subtree, or -1 if unbalanced
    */
   #checkBalance(node) {
      if (node === null) return 0

      const left = this.#checkBalance(node.left)
      if (left === -1) return -1 // propagate unbalanced signal up

      const right = this.#checkBalance(node.right)
      if (right === -1) return -1 // propagate unbalanced signal up

      if (Math.abs(left - right) > 1) return -1 // this node is unbalanced

      return 1 + Math.max(left, right) // balanced so far, return true height
   }

   /**
    * Checks if a value exists in the tree.
    * @param {*} value - The value to search for.
    * @param {Node|null} [node=this.#root] - The current node in recursion.
    * @returns {boolean|undefined} True if found, undefined if not found.
    */
   includes(value, node = this.#root) {
      if (node === null) {
         return
      }

      if (value === node.data) {
         return true
      }

      return value < node.data
         ? this.includes(value, node.left)
         : (this.includes(value, node.right) ?? false)
   }

   /**
    * Inserts a value into the BST.
    * @param {*} value - The value to insert.
    * @param {Node|null} [node=this.#root] - The current node in recursion.
    */
   insert(value, node = this.#root) {
      if (node === null) {
         this.#root = new Node(value)
      } else if (value === node.data) {
         return
      }

      if (node.data > value) {
         node.left === null
            ? (node.left = new Node(value))
            : this.insert(value, node.left)
      } else {
         node.right === null
            ? (node.right = new Node(value))
            : this.insert(value, node.right)
      }
   }

   /**
    * Deletes a value from the BST.
    * @param {*} value - The value to delete.
    * @param {Node|null} [parentNode=null] - The parent of the current node.
    * @param {Node|null} [node=this.#root] - The current node in recursion.
    * @param {boolean} [isLeft=true] - Whether the current node is a left child.
    */
   deleteItem(value, parentNode = null, node = this.#root, isLeft = true) {
      if (node === null) {
         return
      }

      if (value < node.data) {
         this.deleteItem(value, node, node.left, true)
         return
      } else if (value > node.data) {
         this.deleteItem(value, node, node.right, false)
         return
      }

      if (!node.left && !node.right) {
         parentNode === null
            ? (this.#root = null)
            : isLeft
              ? (parentNode.left = null)
              : (parentNode.right = null)
      } else if (node.left && node.right) {
         const { successorParent, successor } = this.#findSuccessor(node)
         node.data = successor.data
         this.deleteItem(
            successor.data,
            successorParent,
            successor,
            successorParent.left === successor, // ← correct: is successor a left child?
         )
      } else {
         const child = node.left ?? node.right
         parentNode === null
            ? (this.#root = child)
            : isLeft
              ? (parentNode.left = child)
              : (parentNode.right = child)
      }
   }

   /**
    * invokes callback per level (Uses breadth first level)
    * @param {function} [callback=null] - The function that will be called per each value
    * @param {Node|null} [node=this.#root] - The current node that will be searched
    */
   levelForEach(callback, node = this.#root) {
      if (!callback) {
         throw new Error('Callback is undefined!')
      }

      if (node === null) {
         return
      }

      const queue = [this.#root]

      while (queue.length > 0) {
         const node = queue.shift()
         callback(node.data)

         if (node.left) queue.push(node.left)
         if (node.right) queue.push(node.right)
      }
   }

   /**
    * invokes callback per data (DLR)
    * @param {function} [callback=null] - The function that will be called per each value
    * @param {Node|null} [node=this.#root] - The current node that will be searched
    */
   preOrderForEach(callback, node = this.#root) {
      if (node === null) {
         return
      }

      callback(node.data)

      if (node.left) {
         this.preOrderForEach(callback, node.left)
      }

      if (node.right) {
         this.preOrderForEach(callback, node.right)
      }
   }

   /**
    * invokes callback per data (LDR)
    * @param {function} [callback=null] - The function that will be called per each value
    * @param {Node|null} [node=this.#root] - The current node that will be searched
    */
   inOrderForEach(callback, node = this.#root) {
      if (node === null) {
         return
      }

      if (node.left) {
         this.inOrderForEach(callback, node.left)
      }

      callback(node.data)

      if (node.right) {
         this.inOrderForEach(callback, node.right)
      }
   }

   /**
    * invokes callback per data (LRD)
    * @param {function} [callback=null] - The function that will be called per each value
    * @param {Node|null} [node=this.#root] - The current node that will be searched
    */
   postOrderForEach(callback, node = this.#root) {
      if (node === null) {
         return
      }

      if (node.left) {
         this.postOrderForEach(callback, node.left)
      }

      if (node.right) {
         this.postOrderForEach(callback, node.right)
      }

      callback(node.data)
   }

   /**
    * Returns the height from the node to the longest leaf path
    * @param {any} value - The value that the function need to identify the height
    * @param {Node|null} [node=this.#root] - The current node
    * @returns {number} The height of the target node
    */
   height(value, node = this.#root) {
      if (node === null) {
         return
      }

      if (node.data === value) {
         return this.#countHeight(node)
      }

      return node.data < value
         ? this.height(value, node.right)
         : this.height(value, node.left)
   }

   /**
    * Returns the depth from the root to node
    * @param {any} value - The target node
    * @param {Node|null} [node=this.#root] - The current node
    * @param {number} [depth=0] - The depth of the node
    * @returns {number} The depth of the node
    */
   depth(value, node = this.#root, depth = 0) {
      if (node === null) {
         return
      }

      if (node.data === value) {
         return depth
      }

      return node.data < value
         ? this.depth(value, node.right, ++depth)
         : this.depth(value, node.left, ++depth)
   }

   /**
    * Checks if the subtree rooted at node is balanced.
    * Uses -1 as a sentinel value to signal an unbalanced subtree,
    * allowing a single bottom-up pass instead of recomputing heights.
    * @param {Node|null} [node=this.#root] - The current node
    * @returns {boolean} True if the whole tree is balanced
    */
   isBalanced(node = this.#root) {
      return this.#checkBalance(node) !== -1
   }

   /**
    * Rebalances the tree by collecting all values via inOrder traversal
    * (which gives sorted order for free), then rebuilding from scratch.
    * Only rebalances if the tree is currently unbalanced.
    */
   rebalance() {
      if (!this.isBalanced()) {
         const values = []
         this.inOrderForEach(val => values.push(val)) 
         this.#root = this.#buildTree(values)
      }

      return
   }

   /**
    * Prints the BST in a visual tree format.
    * @param {Node|null} [node=this.#root] - The current node to print.
    * @param {string} [prefix=''] - The prefix string for indentation.
    * @param {boolean} [isLeft=true] - Whether the node is a left child.
    */
   prettyPrint(node = this.#root, prefix = '', isLeft = true) {
      if (node === null) {
         return node
      }

      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false)
      console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`)
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true)
   }

   /**
    * Sets the root by building a balanced BST from an array.
    * @param {number[]} arr - The array of values to build the tree from.
    */
   set root(arr) {
      const sorted = new Set(this.#sort(arr))
      const root = this.#buildTree([...sorted])
      this.#root = root
   }
}

module.exports = Tree
