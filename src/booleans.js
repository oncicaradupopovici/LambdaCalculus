export const True = (a) => (b) => a;
export const False = (a) => (b) => b;

export const and = (p) => (q) => p(q)(p);
export const or = (p) => (q) => p(p)(q);

export const showBool = (b) => b("true")("false");
export const toBool = (b) => b(true)(false);
