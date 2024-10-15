import './FormComponent.css'
const FormComponent=()=>{
    return(
        <div>
            <form>
                <div className="form-control">
                    <label>List</label>
                    <input type="text" placeholder="Your list"/>
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input type="text" placeholder="(+ received, - paid)"/>
                </div>
                <div className="form-control">
                    <button type="submit" className='btn'>Add yours</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent