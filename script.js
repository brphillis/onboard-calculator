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

const calculateButton = document.getElementById("calculateBtn");
const salaryValue = document.getElementById("salary");
const taxPaidValue = document.getElementById("taxPaid");
const salaryAfterTax = document.getElementById("salaryAfterTax");

calculateButton.addEventListener("click", () => {
  const enteredSalary = parseFloat(salaryValue.value);
  if (!isNaN(enteredSalary) && enteredSalary > 0) {
    const calculatedTax = calcAnnualTax(enteredSalary).toString();
    taxPaidValue.value = "$" + calculatedTax;
    salaryAfterTax.value = enteredSalary - calculatedTax;
  } else {
    taxPaidValue.value = "Salary Must Be Valid";
    salaryAfterTax.value = "Salary Must Be Valid";
  }
});
