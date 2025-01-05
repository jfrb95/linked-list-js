import { LinkedList } from "./modules/linked-list.js";

const log = console.log;

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

log(list.toString());