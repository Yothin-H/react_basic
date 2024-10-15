import PropTypes from 'prop-types';
import './Item.css'

const Item =(props)=>{
    const {title, amount}=props
    const status=amount<0 ? "paid" :"received"
    const symbol=amount<0 ? "-" :"+"
return(
    <li className={status}>{title} <span>{symbol}{Math.abs(amount)}</span></li>
);
}

// Lower case 
Item.propTypes={
    // Uppercase, isRequired (must fill)
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Item