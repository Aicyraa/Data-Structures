export default class Node {
   
   data
   neighbor

   constructor(data, neighbor) {
      this.data = data;
      this.neighbor = neighbor || null;
   }

   get data() {
      return this.data
   }

   get neighbor() {
      return this.neighbor
   }
   
   set neighbor(value) {
      this.neighbor = value 
   }
}