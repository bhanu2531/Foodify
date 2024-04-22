import { useContext } from 'react'
import Button from '../UI/Button'
import logoImg from '../assets/logo.jpg'
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/userprogressContext';

export default function Header(){
    const cartCtx=useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    
    const totalCartItems=cartCtx.items.reduce((totalNumberOfItems,item)=> {
        return totalNumberOfItems + item.quantity;
    },0);

    function handleShowCart(){
        userProgressCtx.showCart();
    }
    return <header id="main-header">
        <div id="title">
            <img src={logoImg} alt='food order'/>
            <h1>FOODIFY</h1>
        </div>
       <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
       </nav> 
    </header>
}