import PropTypes from 'prop-types';

const Item =(props)=>{
    const {title, amount}=props
return(
    <li>{title} <span>{amount}</span></li>
);
}

// Lower case 
Item.propTypes={
    // Uppercase, isRequired (must fill)
    title:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Item