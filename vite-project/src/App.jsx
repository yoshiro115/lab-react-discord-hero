import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
// import Header from './components/Header';

function App() {
  

  return (
    <div className='App'>
      
      <Header/>
      <section className = 'content'>
        <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
        <Footer/>
      </section>

    </div>
  )
}

export default App
