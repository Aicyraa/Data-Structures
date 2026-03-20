export default class Node {
   #data
   #neighbor
   constructor(data, neighbor) {
      this.#data = data;
      this.#neighbor = neighbor || null;
   }

   set value(value) {
      this.#data = value
   }

   set neighbor(value) {
      this.#neighbor = value 
   }
}