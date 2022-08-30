import './styles.css'
import logo from '../../src/assets/logo.svg'

function Header(){
    return(
        <header className = "main-header">
            <img src = {logo} alt = "logo"/>
            <div className = "logo-text">
                <span className = "logo-text-1">Game Survey</span>
                <span className = "logo-text-2"> 4you</span>


            </div>


        </header>

    )
}

export default Header;