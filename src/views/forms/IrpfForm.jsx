import { useInput } from "../../hooks/useInput.hook";
import { usePerson } from '../../hooks/usePerson.hook';

function IrpfForm({ onSubmit }) {
  const [person] = usePerson();

  const [totalSalary, , totalSalaryProps] = useInput(0.0);
  const [dependentsNumber, , dependentsNumberProps] = useInput(0.0);

  const submit = (evt) => {
    evt.preventDefault();
    onSubmit(totalSalary, dependentsNumber);
  };

  return (
    <form onSubmit={submit}>
      <div className="row">
        <label>Salário Bruto</label>
        <input id="totalSalary" placeholder="0.00" {...totalSalaryProps} />
      </div>
      <div className="row">
        <label>Número de Dependentes</label>
        <input id="dependentsNumber" placeholder="0.00" {...dependentsNumberProps} />
      </div>
      <button type="submit" className="action">
        Calcular
      </button>
    </form>
  );
}

export default IrpfForm;
