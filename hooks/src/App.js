import logo from './logo.svg';
import './App.css';
import Renderizardatos from './componentes/Renderizarlista'

function App () {
  const {datos, error} = Renderizardatos('https://jsonplaceholder.typicode.com/photos');
  
  // Limitar los datos a los primeros 10 elementos
  const datosLimitados = datos?.slice(0, 5);
  
  return (
    <div className="App">
        <h1>Consumiendo Apis</h1>
      <section>
      {datosLimitados?.map(user => (
        <li key={user.url}>
          <p>{user.title}</p>
          <img src={user.url} alt={user.title} />
          <img src={user.thumbnailUrl} alt={user.title} />
        </li>
      ))}
      {error && <p>Hubo un error al cargar los datos: {error + ""}</p>} 
      </section>
    </div>
  )
}

export default App;
