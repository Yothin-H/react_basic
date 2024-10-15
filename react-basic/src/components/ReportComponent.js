import DataContext from "../data/DataContext";
import { useContext } from "react";
import './ReportComponent.css'


const ReportComponent=()=>{
    // const name = useContext(DataContext)
    const {income, expense} = useContext(DataContext)
    return (
      <div>
        <h4>Available budget</h4>
        <h1> ฿{(income-expense).toFixed(2)}</h1>
        <div className="report-container">
            <div>
                <h3>Income</h3>
                <p className="report income">฿{income}</p>
            </div>
            <div>
                <h3>Expense</h3>
                <p className="report expense">฿{expense}</p>
            </div>

        </div>
      </div>
    );
  }

  export default ReportComponent