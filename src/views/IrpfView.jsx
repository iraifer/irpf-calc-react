import { usePerson } from '../hooks/usePerson.hook';

function IrpfView({ className }) {

  const [person] = usePerson();

  return (

    <div className={className}>
      Calculo do valor total do IRPF &eacute; R$<strong><span id="irpf">{person.irpf}</span></strong> 
    </div>
  );
}

export default IrpfView;
