// Sugar syntax: es la sintaxis agregada a un lenguaje de programación con el objetivo de hacer más fácil y eficiente su utilización, favorece su escritura, lectura y comprensión
// Ejemplo: i = i + 1 ----> i++
//polyfills ejemplo/práctica:
const usuarios = [
    {
        id: 1,
        nombre: "Conrado Lanusse",
        curso: "React JS"
    },
    {
        id: 2,
        nombre: "Federico Blauztik",
        curso: "React JS"
    },
    {
        id: 3,
        nombre: "Sergio Lopez",
        curso: "Desarrollo web"
    },
    {
        id: 4,
        nombre: "Julian Debraba",
        curso: "Javascript"
    }
]

const result = usuarios.find((el)=> el.curso === "Desarrollo web");//en este ejemplo, el "el" recorre cada curso hasta encontrar el que diga desarrollo web y me lo mostrará; si no encuentra nada me tirará undefined

function encontrar (arr, fn){
    for (var i = 0; i < arr.lenghtM; i++){
        var current = arr[i]
        // console.log(current)
        if (fn(current) === true){
            return current
        }
    }
}

//encontrar(usuarios);aca me mostrará cada array con sus id, nombre y cursos
encontrar(usuarios, (el) => el.id === 4);//aca le digo que me muestre el array que sea del id 4, o sea el de Julian Debraba


//si quiero compartir una función de un js a otro js, tengo que usar la palabra reservada "export" + default + referencia a la función; y lo importo en el js usando import
const saludar = () =>{
    console.log("Hola mundo")
}
export default saludar//en este js
import saludar from './archivoQueMeLoExporto.js'//este es el archivo al que se le importa la función, y le agrego la función dentro de función del archivo que recibió la importanción, tipo así:
function app(){
    saludar()
}

//el export también se puede hacer así:
export const saludar2 = () =>{
    console.log("Hola mundo")
}
//la diferencia es que el import tambie´n cambia:
import { saludar2} from './archivoQueMeLoExporto.js'








//Transpiling: convierte un código en su representación en otro lenguaje, por ejemplo ssass a css ponele, o mejor dicho de typescript a javascript


//JSX = javascript xml: es una extensión de la sintaxis de javascript que se parece a HTML, permite hacer llamadas a funciones y a construcción de objetos. Nos deja escribir código de esta forma:
/*{ <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to Mateiño.
  </p>
  <h2>Coderhouse</h2>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Kennen
  </a>
</header>
</div> }*/

// dato importante: en react siempre escribiremos este código jsX, aca en vez de usar class, usamos className para referenciar a las clases de html

//también puedo hacer esto:
function App() {

    const mensaje = "pero madre mia willy"
    return (
      <div className="App">
        {/* aca usamos siempre camelcase como en className o onClick */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { mensaje}
          </p>
          {/* <p>
          Edit <code>src/App.js</code> and save to Mateiño.
          </p> */}
          <h2>Coderhouse</h2>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kennen
          </a>
        </header>
      </div>
    );
  }
  

