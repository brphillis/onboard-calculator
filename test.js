const { calcAnnualTax, calcAnnualSuper } = require("./calculator");

describe("calcAnnualTax", () => {
  it("should calculate annual tax correctly for different salary ranges", () => {
    expect(calcAnnualTax(10000)).toBe(0);
    expect(calcAnnualTax(20000)).toBe(342);
    expect(calcAnnualTax(50000)).toBe(6717);
    expect(calcAnnualTax(100000)).toBe(22967);
    expect(calcAnnualTax(200000)).toBe(60667);
  });

  it("should return 0 for salary less than or equal to 18200", () => {
    expect(calcAnnualTax(0)).toBe(0);
    expect(calcAnnualTax(18200)).toBe(0);
  });
});

describe("calcAnnualSuper", () => {
  it("should calculate annual superannuation correctly", () => {
    expect(calcAnnualSuper(10000)).toBe(950);
    expect(calcAnnualSuper(20000)).toBe(1900);
    expect(calcAnnualSuper(50000)).toBe(4750);
    expect(calcAnnualSuper(100000)).toBe(9500);
    expect(calcAnnualSuper(200000)).toBe(19000);
  });
});
