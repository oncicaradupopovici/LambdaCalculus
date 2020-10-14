/*Factorial à la 1940
fact n = 
    ifte (isZero n)
        one
    (mul n (fact (decr n)))


isZero n = 
    n (\_->false) true
*/

import { one, pred, mult } from "./numbers";
import { toBool } from "./booleans";

//const isZero = (n) => n((_) => False)(True);
export const isZero = (n) => n((_) => (a) => (b) => b)((a) => (b) => a);

//const fact_ = (f) => (n) => isZero(n)(one)(mult(n)(f(f)(pred(n))));
const fact_ = (f) => (n) => {
  if (toBool(isZero(n))) return one;
  else return mult(n)(f(f)(pred(n)));
};
export const fact = fact_(fact_);
