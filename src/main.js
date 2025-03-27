import { linkedList } from "./linkedList.js";

const list = linkedList();

list.append("apple");
list.append("mango");
list.append("water melon");
list.append("banana");
list.append("grapes");
list.append("pineapple");
list.append("orange");
list.append("guava");

console.log(" Full List : ");
console.log(list.tostring());

console.log("Size : ", list.size());
console.log("Head:", list.getHead());
console.log("Tail:", list.tail());
console.log("Node at 2:", list.atIndex(2));
console.log("Contains 'grapes'?", list.contains("grapes"));
console.log("Find 'orange':", list.find("orange"));

list.pop();
console.log("After pop:", list.tostring());

list.insertAt("papaya", 2);
console.log("After insertAt:", list.tostring());

list.removeAt(1);
console.log("After removeAt:", list.tostring());
