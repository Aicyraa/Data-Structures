import HashMap from './hashTable.js'

describe('HashMap', () => {
   let map

   beforeEach(() => {
      map = new HashMap()
      map.set('apple', 'red')
      map.set('banana', 'yellow')
      map.set('carrot', 'orange')
   })

   describe('set', () => {
      it('stores a new key-value pair', () => {
         map.set('dog', 'brown')
         expect(map.has('dog')).toBe(true)
      })

      it('updates the value for an existing key', () => {
         map.set('apple', 'green')
         expect(map.get('apple').value).toBe('green')
      })

      it('doubles capacity when load factor is exceeded', () => {
         const fresh = new HashMap()
         // 16 * 0.75 = 12, so the 13th entry triggers resize
         const keys = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
         keys.forEach((k, i) => fresh.set(k, i))
         expect(fresh.size()).toBe(13)
      })
   })

   describe('get', () => {
      it('returns the entry for an existing key', () => {
         expect(map.get('apple')).toMatchObject({ key: 'apple', value: 'red' })
      })

      it('returns null for a missing key', () => {
         expect(map.get('tiger')).toBeNull()
      })
   })

   describe('has', () => {
      it('returns true if key exists', () => {
         expect(map.has('banana')).toBe(true)
      })

      it('returns false if key does not exist', () => {
         expect(map.has('tiger')).toBe(false)
      })
   })

   describe('remove', () => {
      it('removes an existing key and returns true', () => {
         expect(map.remove('apple')).toBe(true)
         expect(map.has('apple')).toBe(false)
      })

      it('returns false for a key that does not exist', () => {
         expect(map.remove('tiger')).toBe(false)
      })

      it('decreases size by 1', () => {
         const before = map.size()
         map.remove('apple')
         expect(map.size()).toBe(before - 1)
      })
   })

   describe('size', () => {
      it('returns the correct number of entries', () => {
         expect(map.size()).toBe(3)
      })
   })

   describe('clear', () => {
      it('removes all entries', () => {
         map.clear()
         expect(map.size()).toBe(0)
      })
   })

   describe('keys', () => {
      it('returns all keys', () => {
         expect(map.keys()).toEqual(expect.arrayContaining(['apple', 'banana', 'carrot']))
      })
   })

   describe('values', () => {
      it('returns all values', () => {
         expect(map.values()).toEqual(expect.arrayContaining(['red', 'yellow', 'orange']))
      })
   })

   describe('entries', () => {
      it('returns all [key, value] pairs', () => {
         expect(map.entries()).toEqual(
            expect.arrayContaining([
               ['apple', 'red'],
               ['banana', 'yellow'],
               ['carrot', 'orange'],
            ])
         )
      })
   })
})
