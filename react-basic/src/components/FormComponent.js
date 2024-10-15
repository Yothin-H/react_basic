import './FormComponent.css'
const FormComponent=()=>{
    const inputTitle=(event)=>{
        console.log(event.target.value)
    }

    const inputAmount=(event)=>{
        console.log(event.target.value)
    }

    const saveItem=(event)=>{
        event.preventDefault()
        console.log('saved')
    }

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>List</label>
                    <input type="text" placeholder="Your list" onChange={inputTitle}/>
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input type="text" placeholder="(+ received, - paid)" onChange={inputAmount}/>
                </div>
                <div className="form-control">
                    <button type="submit" className='btn'>Add yours</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent