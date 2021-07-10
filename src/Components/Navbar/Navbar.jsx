import { Link } from "react-router-dom"
import styles from "./Navbar.module.scss"

const Navbar = () => {
    

    return (
        <nav className={styles.Navbar}>
            <div className={styles.Navbar_top}>
                <div className={styles.Navbar_top__items}><i class="fas fa-user"></i></div>
                <div><Link className={styles.Navbar_top__logo}to="/"><h1>LIMIT.</h1></Link></div>
                <div>
                <Link className={styles.Navbar_top__items} to="/cart"><span><i class="fas fa-shopping-cart"></i></span></Link>
                </div>
            </div>
            <div  className={styles.Navbar_bottom}>
                <ul  className={styles.Navbar_bottom__list}>
                    <Link className={styles.Navbar_bottom__items} to="/catalogue"><li>All</li></Link>
                    <Link className={styles.Navbar_bottom__items} to="/catalogue/clothing"><li>Clothing</li></Link> 
                    <Link className={styles.Navbar_bottom__items} to="/catalogue/footwear"><li>Footwear</li></Link>
                    <Link className={styles.Navbar_bottom__items} to="/catalogue/accessories"><li>Accessories</li></Link>
                    <Link className={styles.Navbar_bottom__items} to="/cart"><li>Cart</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
