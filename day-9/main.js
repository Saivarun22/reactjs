import Product  from "./module1.js";
import { Student } from "./module2.js";
console.log("product" ,Product.Product);
console.log("Customer" ,Product.Customer);
let student1 =new Student ("John",20,101,"BCA","New York");
console.log(student1.printdata());