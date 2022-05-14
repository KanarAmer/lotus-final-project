import { NavLink } from 'react-router-dom'
// Interfaces:
import { Menu__props } from "../Interfaces"
// Components:
import UserOptions from "./UserOptions"
// Styles:
import Styles from '../styles/Components/Menu.module.css'


// Menu component - the top Menu navigetor
// Input: isMenuOpened:boolean, setIsMenuOpened:setter
const Menu: React.FC<Menu__props> = ({isMenuOpened, setIsMenuOpened, isLoggedIn}) => {
    return (
        <div className={`${Styles["menu-nav"]} ${isMenuOpened?Styles["menu-nav-show"]:""}`}>
            <NavLink className={Styles["HeaderNavLink"]} to="/about">About</NavLink>
            <NavLink className={Styles["HeaderNavLink"]} to="/tracker">Tracker</NavLink>
            <NavLink className={Styles["HeaderNavLink"]} to="/remainder">Reminder</NavLink>
            <NavLink className={Styles["HeaderNavLink"]} to="/articles">Articles</NavLink>
            <NavLink className={Styles["HeaderNavLink"]} to="/community">Community</NavLink>
            <UserOptions isLoggedIn={isLoggedIn} />
        </div>
    )
}


export default Menu