
import { ReactComponent as HomeIcon } from './../../Assets/Icons/Home.svg';
import { ReactComponent as CustomerIcon } from './../../Assets/Icons/Users.svg';
import { ReactComponent as StoreIcon } from './../../Assets/Icons/Store.svg';
import { ReactComponent as OrderIcon } from './../../Assets/Icons/Tags.svg';
import { Link } from "react-router-dom";

function Menu() {
    return (
        <ul className="menu bg-base-100 w-auto p-2 rounded-box">
            <li>
                <Link to="/">
                    <HomeIcon fill='currentColor' className='w-5 h-5' />
                    <span className=" hidden sm:hidden md:block lg:block">Home</span>
                </Link>
            </li>
            <li>
                <Link to="customers">
                    <CustomerIcon fill='currentColor' className='w-5 h-5' />
                   <span className=" hidden sm:hidden md:block lg:block"> Customer Management</span>
                </Link>
            </li>
            <li>
                <Link to="products">
                    <StoreIcon fill='currentColor' className='w-5 h-5' />
                    <span className=" hidden sm:hidden md:block lg:block">Product Management</span>
                </Link>
            </li>
            <li>
                <Link to="orders">
                    <OrderIcon fill='currentColor' className='w-5 h-5' />
                    <span className=" hidden sm:hidden md:block lg:block">Orders</span> 
                </Link>
            </li>
            <li>
                <Link to="setting">
                    <OrderIcon fill='currentColor' className='w-5 h-5' />
                   <span className=" hidden sm:hidden md:block lg:block"> Setting </span>
                </Link>
            </li>
        </ul>
    )
}

export default Menu;