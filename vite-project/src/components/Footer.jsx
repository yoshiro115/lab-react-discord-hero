import discordBackground from '../assets/img/discord-background.png'

export const Footer = () => {
  return (
    <div className = 'footer'>
            <div className = 'btn'>
            <button className = 'download'>Download for Mac</button>
            <button className = 'browser'>Open Discord in you browser</button>
            </div>
            
            <div>
              <img src={discordBackground}/>
            </div>
        </div>
  )
}


