const Tree = require('./tree.js')

describe('Sorting method test', () => {
   it.skip('Array with 2 elements', () => {
      const tree = new Tree()
      tree.root = [4, 3]
      expect(tree.root).toEqual([3, 4])
   })

   it.skip('Array with 4 elements', () => {
      const tree = new Tree()
      tree.root = [4, 3, 1, 2]
      expect(tree.root).toEqual([1, 2, 3, 4])
   })
})

describe('Tree methods', () => {
   // const tree = new Tree()
   // tree.root = [2, 4, 6]

   it.skip('Includes 6 (root)', () => {
      expect(tree.includes(6)).toBeTruthy()
   })

   it.skip('Includes 10', () => {
      expect(tree.includes(6)).toBeTruthy()
   })

   it('Check if node thas that dont have children is balance', () => {
      const balanceBST = new Tree()
      balanceBST.root = [1]
      expect(balanceBST.isBalanced()).toBeTruthy()
   })

   it('Check if balanced', () => {
      const balanceBST = new Tree()
      balanceBST.root = [1, 2, 3]
      expect(balanceBST.isBalanced()).toBeTruthy()
   })

   it('Check if inbalanced', () => {
      const inbalanceBST = new Tree()
      inbalanceBST.root = [1, 2, 3, 4]
      expect(inbalanceBST.isBalanced()).toBeTruthy()
   })
   
})
