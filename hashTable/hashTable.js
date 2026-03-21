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

   #resize() {
      // check if entries is greater than cap * load
      // create a copy of the old bucket

      
   }

   set(key, value) {
      const entries = this.#buckets.filter(bucket => bucket !== null)
      const loadChecker = this.#capacity * this.#load_factor 
      console.log(loadChecker <= entries.length, entries.length);
      
      if (loadChecker <= entries.length) {
         console.log('Higher Risk Of Collision');
         
         const oldBuckets = this.#buckets
         const newBuckets = Array(this.#capacity).fill(null)
         this.#buckets = [...oldBuckets, ...newBuckets]
         this.#capacity *= 2
      }

      this.#buckets[this.#hash(key)] = { key, value }
   }

   toString() {
      return this.#buckets
   }
}
