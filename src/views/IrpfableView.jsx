import { useState, useEffect } from 'react';

import IrpfController from '../controllers/IrpfController';

function IrpfTableView() {

  const [controller,] = useState(new IrpfController());
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    controller.loadTable((tblObj) => {
        setTableData(tblObj);
    });
  }, [controller]);
  
  return (<table id="unique"><tbody id="body">
      {  Object.keys(tableData)
        .sort()
        .map((k) =>
          <tr key={k}>
            <td> {k} </td>
            <td> {tableData[k]} </td>
          </tr>
        )
      }
    </tbody></table>);
}

export default IrpfTableView;
