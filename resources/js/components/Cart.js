import '../../css/Cart.css'

const Cart = ({cartItem}) => {
    return (
        <div className = "Cart-item">
            <span className='first'> <strong> {cartItem.type} </strong> </span>
            {cartItem.cart.map(cartItem => (
                        <span> <img src = {cartItem} alt="Account-img" className = "Account-pic"></img></span>
                    ))}           
            <span className='third'> {cartItem.price} </span>
            <span className='fourth'> {cartItem.date} </span>
        </div>
    );
}

export default Cart;