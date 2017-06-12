//const make a pair
const cons = (x, y) => (m) => m(x, y);

const car = z => z((x, y) => x);
const cdr = z => z((x, y) => y);

const point = cons(x, y);
const x = car(point);
const y = cdr(point);
