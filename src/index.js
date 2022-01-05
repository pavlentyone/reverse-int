module.exports = function reverse (n) {
  const ns = String(n);
  return String(ns.split('').reverse());
}
