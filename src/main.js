import { get } from "node:http";
import { deJoaoParaMaria, getJoao, getMaria } from "./joaoEMaria";

console.log('módulo main');

console.log('João tem ', getJoao(), ' maçãs!');
console.log('Maria tem ', getMaria(), ' maçãs!');

deJoaoParaMaria();

console.log('João tem ', getJoao(), ' maçãs!');
console.log('Maria tem ', getMaria(), ' maçãs!');
