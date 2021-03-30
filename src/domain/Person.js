export default class Person {
  constructor(thetotalSalary, thedependentsNumber) {
    this.totalSalary = thetotalSalary;
    this.dependentsNumber = thedependentsNumber;
    this.irpf = null;
  }

  isValid() {
    return this.totalSalary && this.dependentsNumber;
  }

  get totalSalary() {
    return this._totalSalary;
  }

  get dependentsNumber() {
    return this._dependentsNumber;
  }

  get irpf() {
    return this._irpf;
  }

  set totalSalary(thetotalSalary) {
    this._totalSalary = thetotalSalary;
    console.log('setting total salary ' + this._totalSalary);
  }

  set dependentsNumber(thedependentsNumber) {
    this._dependentsNumber = thedependentsNumber;
    console.log('setting dependents number ' + this._dependentsNumber);
  }

  set irpf(theIrpf)  {
    this._irpf = theIrpf;
    console.log('setting irpf ' + this._irpf);
  }

  toObject() {
    return {
      totalSalary: this._totalSalary,
      dependentsNumber: this._dependentsNumber,
      irpf: this._irpf
    };
  }
}
