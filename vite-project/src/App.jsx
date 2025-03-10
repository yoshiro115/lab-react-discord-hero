import './App.css'
import discordLogo from './assets/img/discord-logo-white.png'
import menu from './assets/img/menu-icon.png'
import discordBackground from './assets/img/discord-background.png'


function App() {
  

  return (
    <div className='App'>
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

      <section className = 'content'>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <div className = 'footer'>
            <div className = 'btn'>
            <button className = 'download'>Download for Mac</button>
            <button className = 'browser'>Open Discord in you browser</button>
            </div>
            
            <div>
              <img src={discordBackground}/>
            </div>
        </div>
      
      </section>

    </div>
  )
}

export default App
