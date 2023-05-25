const calculateButton = document.getElementById("calculateBtn");
const salaryValue = document.getElementById("salary");
const taxPaidValue = document.getElementById("taxPaid");
const salaryAfterTax = document.getElementById("salaryAfterTax");
const superContribution = document.getElementById("superContribution");

calculateButton.addEventListener("click", () => {
  const enteredSalary = parseFloat(salaryValue.value);
  if (!isNaN(enteredSalary) && enteredSalary > 0) {
    const calculatedTax = calcAnnualTax(enteredSalary).toString();
    taxPaidValue.value = "$" + calculatedTax;
    salaryAfterTax.value = "$" + (enteredSalary - calculatedTax).toString();

    const calculatedSuperContibution =
      calcAnnualSuper(enteredSalary).toString();
    superContribution.value = "$" + calculatedSuperContibution;
  } else {
    taxPaidValue.value = "Salary Must Be Valid";
    salaryAfterTax.value = "Salary Must Be Valid";
    superContribution.value = "Salary Must Be Valid";
  }
});
