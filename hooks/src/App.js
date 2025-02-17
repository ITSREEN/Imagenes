import logo from './logo.svg';
import './App.css';
import Renderizardatos from './componentes/Renderizarlista'

function App () {
  const {datos, error} = Renderizardatos('https://api.thecatapi.com/v1/images/search?limit=10');
  
 
  
  return (
    <div className="App">
        <h1>Consumiendo Apis</h1>
      <section>
      {datos?.map(user => (
        <li key={user.url}>
          <p>{user.title}</p>
          <img src={user.url}/>
         
        </li>
      ))}
      {error && <p>Hubo un error al cargar los datos: {error + ""}</p>} 
      </section>
    </div>
  )
}

export default App;
