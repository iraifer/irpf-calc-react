import { usePerson } from '../hooks/usePerson.hook';

function IrpfView({ className }) {

  const [person] = usePerson();

  return (
    <div className={className}>
      Seu IMC &eacute; <span id="irpf">{person.irpf}</span> ==>{" "}
      <strong>{person.irpfDescription}</strong>
    </div>
  );
}

export default IrpfView;
