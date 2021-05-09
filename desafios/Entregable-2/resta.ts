export default class Resta {
  private operador1: number;
  private operador2: number;

  constructor(num1: number, num2: number) {
    this.operador1 = num1;
    this.operador2 = num2;
  }

  resultado(): number {
    return this.operador1 - this.operador2;
  }
}
