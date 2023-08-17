import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className="flex justify-between items-center fix z-10 top-0 w-full py-5 px-8 text-sm font-light" >
            <ul className="flex items-center gap-3" >
                <li className="font-semibold text-lg">
                    <NavLink 
                    to='/' 
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                    }>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/all' 
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/fornitures'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                    }>
                        fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/toys'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>

            
            <ul className="flex items-center gap-3">
                <li className = 'text-black/30'>
                    guerreroje@gmail.com
                </li>
                <li>
                    <NavLink 
                    to='/my-orders' 
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                    }>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account' 
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                    }>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sig-in' 
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                    }>
                        Sig In
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/fornitures' 
                    className={({ isActive }) => 
                    isActive ? activeStyle : undefined
                    }>
                        🛒 {context.count }
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar