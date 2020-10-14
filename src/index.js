import "./styles.css";
import { zero, one, two, add, succ, pred, mult, toNumber } from "./numbers";
import { True, False, and, or, toBool } from "./booleans";
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
  True = ${toBool(True)}
  False = ${toBool(False)}
  True and False = ${toBool(and(True)(False))}
  True or False = ${toBool(or(True)(False))}
`);

//numbers
h5("Numbers");
pre(`
  zero = ${toNumber(zero)}
  one = ${toNumber(one)}
  two = ${toNumber(two)}

  succ two = ${toNumber(succ(two))}
  two + two = ${toNumber(add(two)(two))}
  two * two = ${toNumber(mult(two)(two))}
  
  pred zero = ${toNumber(pred(zero))}
  pred one = ${toNumber(pred(one))}
  pred two = ${toNumber(pred(two))}
`);

h5("Factorial à la 1940");
pre(`
  isZero zero = ${toBool(isZero(zero))}
  isZero one = ${toBool(isZero(one))}
  fact zero = ${toNumber(fact(zero))}
  fact one = ${toNumber(fact(one))}
  fact (succ two) = ${toNumber(fact(succ(two)))}
  fact (succ (succ two)) = ${toNumber(fact(succ(succ(two))))}
`);
