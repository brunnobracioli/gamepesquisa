import './styles.css'
import logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header className = "main-header">
            <img src = {logo} alt = "logo"/>
            
            <Link to={"/"}>
            <div className = "logo-text">
                <span className = "logo-text-1">Game Survey</span>
                <span className = "logo-text-2"> 4you</span>
            </div>
            </Link>

        </header>
    )
}

export default Header;