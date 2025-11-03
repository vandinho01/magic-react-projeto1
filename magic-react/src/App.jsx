import Header from './Header.jsx' 
import Conteudo from './Conteudo.jsx'
import './App.css'

function App (){
  return(
   <div className="conteudo-principal">
    <Header />
    <Conteudo />
    <footer className='footer'>
      <p>feito por @evandrocode</p>
    </footer>
   </div>
  )
}

export default App;