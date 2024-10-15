import DataContext from "../data/DataContext";
import { useContext } from "react";


const ReportComponent=()=>{
    // const name = useContext(DataContext)
    return (
      <div>
        <DataContext.Consumer>
            {context=><p>Income : {context.income} Expense : {context.expense}</p>}
        </DataContext.Consumer>
      </div>
    );
  }

  export default ReportComponent