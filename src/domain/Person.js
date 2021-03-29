export default class Person {
  constructor(theHeight, theWeight) {
    this.totalSalary = thetotalSalary;
    this.dependentsNumber = thedependentsNumber;
    this.irpf = null;
  }

  isValid() {
    return this.totalSalary && this.dependentsNumber;
  }

  get height() {
    return this._totalSalary;
  }

  get weight() {
    return this._dependentsNumber;
  }

  get irpf() {
    return this._irpf;
  }

  set height(thetotalSalary) {
    console.log('setting total salary');
    this._totalSalary = thetotalSalary;
  }

  set weight(thedependentsNumber) {
    console.log('setting dependents numbert');
    this._dependentsNumber = thedependentsNumber;
  }

  set irpf(theIrpf)  {
    console.log('setting irpf');
    this._irpf = theIrpf;
  }

  toObject() {
    return {
      totalSalary: this._totalSalary,
      dependentsNumber: this._dependentsNumber,
      irpf: this._irpf
    };
  }
}
