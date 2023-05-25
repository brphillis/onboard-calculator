const calcAnnualTax = (salary) => {
  if (parseInt(salary) <= 18200) {
    return 0;
  } else if (salary <= 45000) {
    return (salary - 18200) * 0.19;
  } else if (salary <= 120000) {
    return (salary - 45000) * 0.325 + 5092;
  } else if (salary <= 180000) {
    return (salary - 120000) * 0.37 + 29467;
  } else {
    return (salary - 180000) * 0.45 + 51667;
  }
};

const calcAnnualSuper = (salary) => {
  return parseInt(salary) * 0.095;
};

console.log(calcAnnualTax(50000));
console.log(calcAnnualSuper(50000));
