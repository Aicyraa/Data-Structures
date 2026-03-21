import LinkedList from './linkedList.js'

describe('LinkedList', () => {
   let list

   beforeEach(() => {
      list = new LinkedList()
      list.prepend('Dog')
      list.prepend('Cat')
      list.prepend('Bird')
      // head -> Bird -> Cat -> Dog -> null
   })

   describe('prepend', () => {
      it('sets the new node as head', () => {
         expect(list.head).toBe('Bird')
      })

      it('links to the previous head', () => {
         expect(list.at(1)).toBe('Cat')
      })
   })

   describe('append', () => {
      it('adds a node at the tail', () => {
         list.append('Lion')
         expect(list.tail).toBe('Lion')
      })

      it('increases size by 1', () => {
         const before = list.size()
         list.append('Lion')
         expect(list.size()).toBe(before + 1)
      })
   })

   describe('size', () => {
      it('returns the correct number of nodes', () => {
         expect(list.size()).toBe(3)
      })
   })

   describe('head', () => {
      it('returns the data of the first node', () => {
         expect(list.head).toBe('Bird')
      })
   })

   describe('tail', () => {
      it('returns the data of the last node', () => {
         expect(list.tail).toBe('Dog')
      })
   })

   describe('at', () => {
      it('returns the value at a given index', () => {
         expect(list.at(0)).toBe('Bird')
         expect(list.at(1)).toBe('Cat')
         expect(list.at(2)).toBe('Dog')
      })

      it('returns undefined for out-of-bounds index', () => {
         expect(list.at(99)).toBeUndefined()
      })
   })

   describe('pop', () => {
      it('removes and returns the head', () => {
         expect(list.pop()).toBe('Bird')
      })

      it('sets the next node as the new head', () => {
         list.pop()
         expect(list.head).toBe('Cat')
      })
   })

   describe('contains', () => {
      it('returns true if value exists', () => {
         expect(list.contains('Cat')).toBe(true)
      })

      it('returns false if value does not exist', () => {
         expect(list.contains('Tiger')).toBe(false)
      })
   })

   describe('indexOf', () => {
      it('returns the index of an existing value', () => {
         expect(list.indexOf('Bird')).toBe(0)
         expect(list.indexOf('Cat')).toBe(1)
         expect(list.indexOf('Dog')).toBe(2)
      })

      it('returns -1 for a value not in the list', () => {
         expect(list.indexOf('Tiger')).toBe(-1)
      })
   })

   // Note: the method in linkedlist.js is named `indexof` (lowercase f).
   // If you rename it to `indexOf`, update the tests above accordingly.

   describe('insertAt', () => {
      it('inserts a node after the given index', () => {
         // Bird -> Cat -> Dog  =>  Bird -> Cat -> Parrot -> Dog
         list.insertAt(1, 'Parrot')
         expect(list.at(2)).toBe('Parrot')
      })

      it('preserves surrounding nodes', () => {
         list.insertAt(1, 'Parrot')
         expect(list.at(1)).toBe('Cat')
         expect(list.at(3)).toBe('Dog')
      })

      it('inserts multiple values sequentially', () => {
         // Bird -> Cat -> Dog  =>  Bird -> Cat -> X -> Y -> Dog
         list.insertAt(1, 'X', 'Y')
         expect(list.at(2)).toBe('X')
         expect(list.at(3)).toBe('Y')
      })
   })

   describe('removeAt', () => {
      it('removes the head when index is 0', () => {
         list.removeAt(0)
         expect(list.head).toBe('Cat')
      })

      it('removes a middle node', () => {
         list.removeAt(1)
         expect(list.at(1)).toBe('Dog')
         expect(list.size()).toBe(2)
      })

      it('removes the tail node', () => {
         list.removeAt(2)
         expect(list.tail).toBe('Cat')
         expect(list.size()).toBe(2)
      })
   })

   describe('toString', () => {
      it('returns the correct string representation', () => {
         expect(list.toString()).toBe('( Bird ) -> ( Cat ) -> ( Dog ) -> null')
      })
   })
})
