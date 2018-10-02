module.exports = function getZerosCount(number, base) {
  const factorList = getFactorList(base);
  const zeros = {};
  for (let i = 0; i < factorList.length; i++) {
    let factor = factorList[i];
    if (!zeros[factor]) {
      zeros[factor] = [getZeros(number, factor), 1];
    } else {
      zeros[factor][1]++;
    }
  }
  let result;
  for (let factor in zeros) {
    let finalZerosCount = Math.floor(zeros[factor][0] / zeros[factor][1]);
    if (!result || result > finalZerosCount) {
      result = finalZerosCount;
    } 
  }
  return result;
}
function getSmallestFactor(n) {
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) return i;
  } 
}
function getFactorList(base) {
  const factors = [];
  let rem = base;
  while (rem !== 1) {
    let smallest = getSmallestFactor(rem);
    factors.push(smallest);
    rem /= smallest;
  }
  return factors;
}
function getZeros(number, factor) {
  let result = 0;
  for (let i = factor; i <= number; i *= factor) {
    result += Math.floor(number / i);
  }
  return result;
}