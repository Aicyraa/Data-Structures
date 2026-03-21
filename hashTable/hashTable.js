export default class HashMap {
   #load_factor = 0.75
   #capacity = 16
   #buckets = Array(this.#capacity).fill(null)

   #hash(key) {
      const multiplier = 31
      var hashCode = 0

      for (let i = 0; i < key.length; i++) {
         hashCode = (multiplier * hashCode + key.charCodeAt(i)) % this.#capacity
      }

      return hashCode
   }

   set(key, value) {
      const entries = this.#buckets.filter(bucket => bucket !== null)
      const loadChecker = this.#capacity * this.#load_factor

      // if entries is > loadChecker then more collision will occur
      if (loadChecker <= entries.length) {
         // increases buckets size
         const oldBuckets = this.#buckets
         const newBuckets = Array(this.#capacity).fill(null)
         this.#buckets = [...oldBuckets, ...newBuckets]
         this.#capacity *= 2
      }

      this.#buckets[this.#hash(key)] = { key, value }
   }

   get(key) {
      return this.#buckets[this.#hash(key)]
   }

   has(key) {
      return this.#buckets[this.#hash(key)] !== null ? true : false
   }

   remove(key) {
      const buckIdx = this.#hash(key)
      if (buckIdx > this.#capacity || this.#buckets[buckIdx] === null) {
         return false
      } else{
         this.#buckets[buckIdx] = null
         return true 
      }
   }

   size() {
      return this.#buckets.filter(bucket => bucket !== null).length
   }

   clear() {
      this.#buckets.fill(null)
   }

   keys() {
      return this.#buckets.filter(bucket => bucket !== null).map(bucket => bucket.key)
   }

   values() {
      return this.#buckets.filter(bucket => bucket !== null).map(bucket => bucket.value)
   }

   entries() {
      return this.#buckets.filter(bucket => bucket !== null).map(({key, value}) => [key, value])
   }

}
