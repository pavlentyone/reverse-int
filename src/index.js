module.exports = function reverse (n) {
  const ns = String(Math.abs(n));
  return ns.split('').reverse().join('');
}
