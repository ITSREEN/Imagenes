import logo from './logo.svg';
import './App.css';
import Renderizardatos from './componentes/Renderizarlista'

function App () {
  const {datos:datos1, error:error1} = Renderizardatos('https://api.thecatapi.com/v1/images/search?limit=10')
  const {datos:datos2,error:error2} = Renderizardatos('https://jsonplaceholder.typicode.com/users')
  
  return (
    <div className="App">
        <h1>Consumiendo Apis</h1>
      <section>
      {datos2?.map(user =><li key={user.id}>{user.id}--{user.name}--{user.username}</li>)}
      {datos1?.map(user => (
        <li key={user.url}>
          <p>{user.title}</p>
          <img src={user.url}/>
        </li>
      ))}
      {error2 && <p>Hubo un error al cargar los datos: {error2 + ""}</p>} 
      </section>
    </div>
  )
}

export default App;
