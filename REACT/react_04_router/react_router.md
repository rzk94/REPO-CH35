# React Router

### Instalación
Ejecutar el comando npm para instalar React Router dentro del proyecto
```sh
npm install react-router-dom
```

### Implementación
1. Importar React Router en `main.jsx` para que se encuentre disponible en cualquier parte de la aplicación.
Para ello, importamos el componente 
`import { BrowserRouter } from 'react-router-dom`

2. Modificar el componente `<App />` y envolverlo con los componentes `<BrowserRouter> </ BrowserRouter>` quedando de la siguiente manera:
```javascript
import { BrowserRouter } from 'react-router-dom'

<BrowserRouter>
    <App />
</BrowserRouter>
```
3. Crear componentes `Inicio.jsx`, `SobreNosotros.jsx`, `Contacto.jsx`
4. Necesitamos importar las funcionalidades que emplearemos `Route` y `Routes` dentro del archivo `App.jsx`
```javascript
import { Routes, Route } from 'react-router-dom'
```
5. Modificamos `App.jsx` para implementar Routes y Route
6. Para evitar etiquetas de anclaje <a></a>, vamos a ocupar una funcionalidad de react router llamada `{link}`
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './components/Inicio'
import Nosotros from './components/SobreNosotros'
import Contacto from './components/Contacto'

// - Routes. Actúa como contenedor padre de todas las rutas individuales que se crearán en la aplicación
/* - Route. Es la ruta 'hija' de cada componente. Recibe dos atributos
    1. path: especifica la ruta (URL) a seguir
    2. element: especifica el componente que se renderiza 
*/
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Inicio /> } />
      <Route path="about-us" element={ <Nosotros /> } />
      <Route path="contact" element={ <Contacto /> } />
    </Routes>
    </>
  )
}

export default App