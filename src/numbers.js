export const zero = (f) => (x) => x;
export const one = (f) => (x) => f(x);
export const two = (f) => (x) => f(f(x));

export const add = (m) => (n) => (f) => (x) => m(f)(n(f)(x));
export const succ = (n) => add(n)(one);
export const mult = (m) => (n) => (f) => (x) => m(n(f))(x);
export const pred = (n) => (f) => (x) =>
  n((g) => (h) => h(g(f)))((u) => x)((u) => u);

export const showNumber = (n) => n((x) => x + 1)(0);
