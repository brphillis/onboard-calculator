const calcAnnualTax = (salary) => {
  if (salary <= 18200) {
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
  return salary * 0.095;
};

// This does not account for Medicare levy, function has been added as demonstration in case it was a hidden requirement.

// const calcMedicareLevy = (salary) => {
//   if (salary <= 22800) {
//     return 0;
//   } else if (salary <= 28500) {
//     return (salary - 22800) * 0.1;
//   } else if (salary <= 90000) {
//     return (salary - 28501) * 0.02 + 570;
//   } else if (salary <= 140000) {
//     return (salary - 90001) * 0.025 + 1796;
//   } else {
//     return (salary - 140001) * 0.03 + 4196;
//   }
// };

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  // Export for node unit testing
  module.exports = {
    calcAnnualTax,
    calcAnnualSuper,
  };
} else {
  // Export for browser es modules
  window.calcAnnualTax = calcAnnualTax;
  window.calcAnnualSuper = calcAnnualSuper;
}
