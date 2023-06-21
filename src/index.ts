import { HashTable } from "./hash.js";
let hashTable = new HashTable(100);
console.log(hashTable.table)
hashTable.setItem("Yassin","19")
hashTable.setItem("Syrine","19")
console.log(hashTable.table)
console.log(hashTable.getItem("Syrine"))





