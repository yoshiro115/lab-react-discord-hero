import discordLogo from '../assets/img/discord-logo-white.png'
import menu from '../assets/img/menu-icon.png'

export const Header = () => {
  return (
    <header>
            <div className = "navbar">
              <div>
              <img src={menu}/> 
              </div>
              
              <div>
              <img src={discordLogo}/>
              </div>
            </div>
    
            <h1>IMAGINE A <br/> PLACE...</h1>
    </header>
  )
}
