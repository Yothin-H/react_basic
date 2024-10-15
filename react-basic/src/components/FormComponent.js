import { useState, useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';


const FormComponent=(props)=>{

    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState(0)
    const [formvalid,setFormValid] = useState(false)

    const inputTitle=(event)=>{
        setTitle(event.target.value)
    }

    const inputAmount=(event)=>{
        setAmount(event.target.value)
    }

    const saveItem=(event)=>{
        event.preventDefault()
        const itemData={
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData);
        setTitle('')
        setAmount(0)

    }

    useEffect(()=>{
        const checkData = title.trim().length>0 && amount !== 0
        setFormValid(checkData)
        //interested only with amount
    },[title,amount])

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>List</label>
                    <input type="text" placeholder="Your list" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input type="text" placeholder="(+ received, - paid)" onChange={inputAmount} value={amount}/>
                </div>
                <div className="form-control">
                    <button type="submit" className='btn' disabled={!formvalid}>Add yours</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent