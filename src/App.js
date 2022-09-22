import './App.css';
import Countries from './Components/Countries/Countries';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <Countries></Countries>
    <Footer></Footer>
    </div>
  );
}

function NavBar(){
  return (
    <div>
      <a style={{textDecoration:"none", margin:"10px", color: "green"}} href="#">Home</a>
      <a style={{textDecoration:"none", margin:"10px"}} href="#">About</a>
    </div>
  );
}

/* function LoadCountry(){
  const [countries, setCountries] = useState([]);
  useEffect( ()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Visit the World!</h1>
      <h3>Total {countries.length} countries.</h3>
      <div className='country'>
        {
          countries.map(country =>Country(country))
        }
      </div>
    </div>
  )
}

function Country(props){
  return (
  <div>

      <h3>Name: {props.name.common}</h3>
      <img src={props.flags.png}></img>
      <p>Capital: {props.capital}</p>
      <p>Continent: {props.continents}</p>
      <p>Subregion: {props.subregion}</p>
      <p>Time zone: {props.timezones[0]}</p>
      <p>Area: {props.area}</p>
      <p>Population: {props.population}</p>
    
  </div>
  )
}
 */
export default App;
