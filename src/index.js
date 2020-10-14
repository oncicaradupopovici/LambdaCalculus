import "./styles.css";
import { zero, one, two, add, succ, pred, mult, showNumber } from "./numbers";
import { True, False, and, or, showBool } from "./booleans";
import { isZero, fact } from "./factorial";

const print = (str) => (document.getElementById("app").innerHTML += str);
const tag = (t) => (x) => print(`<${t}>${x}</${t}>`);

const h1 = tag("h1");
const h3 = tag("h3");
const h5 = tag("h5");
const pre = tag("pre");

h1("Functional Guy");
h3("Lambda Calculus");

//booleans
h5("Booleans");
pre(`
  True = ${showBool(True)}
  False = ${showBool(False)}
  True and False = ${showBool(and(True)(False))}
  True or False = ${showBool(or(True)(False))}
`);

//numbers
h5("Numbers");
pre(`
  zero = ${showNumber(zero)}
  one = ${showNumber(one)}
  two = ${showNumber(two)}

  succ two = ${showNumber(succ(two))}
  two + two = ${showNumber(add(two)(two))}
  two * two = ${showNumber(mult(two)(two))}
  
  pred zero = ${showNumber(pred(zero))}
  pred one = ${showNumber(pred(one))}
  pred two = ${showNumber(pred(two))}
`);

h5("Factorial à la 1940");
pre(`
  isZero zero = ${showBool(isZero(zero))}
  isZero one = ${showBool(isZero(one))}
  fact zero = ${showNumber(fact(zero))}
  fact one = ${showNumber(fact(one))}
  fact (succ two) = ${showNumber(fact(succ(two)))}
  fact (succ (succ two)) = ${showNumber(fact(succ(succ(two))))}
`);
