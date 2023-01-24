import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={'food-zone'}>Food Zone</NavLink>
                    <NavLink to={'special-deals'}>Special Deals</NavLink>
                    <NavLink to={'my-account'}>My Account</NavLink>
                    <NavLink to={'contact-us'}>Contact Us</NavLink>
                    <NavLink to={'admin'}>Admin Login</NavLink>
                </li>
            </ul>
            <p>Image and Logo</p>
        </div>
    )
}

export default Header;