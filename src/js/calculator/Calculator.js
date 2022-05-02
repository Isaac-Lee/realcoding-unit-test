export class DivideZeroError extends Error {
  constructor() {
    super('0으로는 나눌 수 없지');
    this.name = 'Divide Zero Error';
  }
}

class Calculator {
  plus = (a, b) => {
    return a + b;
  };
  isNegative = (a) => {
    return a < 0;
  };
  getDate = () => {
    return new Date();
  };
  abs = (a) => {
    return Math.abs(a);
  };
  customCalculation = (callback, ...args) => {
    callback(...args);
  };
  minus = (a, b) => {
    return a - b;
  };
  multiply = (a, b) => {
    return a * b;
  };
  divide = (a, b) => {
    return a / b;
  };
}

export default Calculator;
