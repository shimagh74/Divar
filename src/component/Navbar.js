import React from 'react';
import styles from './Navbar.module.css';


const Navbar = () => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <nav className={styles.Navbar}>
                    <div className={styles.NavRight}>
                        <a href="#" className={styles.NavLogo}>
                            <img src=""></img>
                        </a>

                        <button className={styles.NavDropDown}>
                            <option>تهران</option>
                        </button>
                    </div>
                    <div className={styles.NavLeft}>
                        <ul className={styles.NavItemsLeft}>
                            <li className={styles.NavItem}>دیوار من</li>
                            <li className={styles.NavItem}>چت</li>
                            <li className={styles.NavItem}>درباره ما</li>
                            <li className={styles.NavItem}>بلاگ</li>
                            <li className={styles.NavItem}>پشتیبانی و قوانین</li>
                            <li className={styles.NavItem}>تماس با ما</li>
                        </ul>
                        <button className={styles.NavBtn}>ثبت رایگان آگهی</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
