import { Link } from "react-router-dom"
import styles from "./Navbar.module.scss"

const Navbar = () => {

    //Links should navigate to catalogue and show products of that specific category

    return (
        <nav className={styles.Navbar}>
            <div className={styles.Navbar_top}>
                <div>icon1</div>
                <div><h1>LIMIT.</h1></div>
                <div>
                    <span>icon2</span> <span>icon3</span>
                </div>
            </div>
            <div  className={styles.Navbar_bottom}>
                <ul  className={styles.Navbar_bottom__list}>
                    <Link className={styles.Navbar_bottom__items} to="/catalogue"><li>All</li></Link>
                    <Link className={styles.Navbar_bottom__items} to="/"><li>Clothing</li></Link> 
                    <Link className={styles.Navbar_bottom__items} to="/"><li>Footwear</li></Link>
                    <Link className={styles.Navbar_bottom__items} to="/"><li>Accessories</li></Link>
                    <Link className={styles.Navbar_bottom__items} to="/cart"><li>Cart</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
