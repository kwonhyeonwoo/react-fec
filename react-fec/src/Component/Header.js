import {useState} from "react"
import { MdLineWeight } from "react-icons/md";
import classNames from "classnames/bind";
import styles from "../styles/style.module.scss";
function Header(){
    const [menu,setMenu] = useState([
        {menu:"menu1", src:"/menu1", key:1},
        {menu:"menu2", src:"/menu2", key:2},
        {menu:"menu3", src:"/menu3", key:3},
        {menu:"menu4", src:"/menu4", key:4},
    ])
    const menuList = menu.map((item)=>
        
            <li key={item.key}>
                <a href={item.src}>
                    {item.menu}
                </a>
            </li>
        
    )
    return(
        <header>
            <HeaderBar menuList={menuList}/>
        </header>
    )
}
function HeaderBar({menuList}){
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen =()=>{
        setIsOpen((prev)=>!prev)
    }
    return(
       <>
            <div className={styles.header} onClick={toggleOpen}>
                <div className={styles.header__menu}>
                    <button  >menu</button>
                    {isOpen &&
                    <nav>
                        <ul>
                            {menuList}
                        </ul>
                    </nav>

                    }
                </div>
                
                <div className={styles.header__introduce}>
                    <div>FEC 소개</div>
                </div>
                <div className={styles.header__logo}>
                    <h1>LOGO</h1>
                </div>
                <div className={styles.header__faq}>
                    <div>FAQ</div>
                </div>
            </div>
           
       </>
    )
}
export default Header;