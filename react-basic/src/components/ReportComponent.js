import DataContext from "../data/DataContext";
import { useContext } from "react";


const ReportComponent=()=>{
    // const name = useContext(DataContext)
    const {income, expense} = useContext(DataContext)
    return (
      <div>
        <p>Income : {income}</p> 
        <p>Expense : {expense}</p>
      </div>
    );
  }

  export default ReportComponent