import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Crear} from './componentes/abm/Crear'
import {Modificar} from './componentes/abm/Modificar'
import {Lista as Instrumentos} from './componentes/Lista'
import {NavBar} from './componentes/NavBar'
import {Home} from './componentes/Home'
import Mapa from './componentes/Mapa'
import {DetalleCompleto} from './componentes/DetalleCompleto'

function App() {
  return (
      <BrowserRouter>
      <NavBar />
      <Switch className="d-flex align-self-center">
          <Route exact path="/" component={Home}/>
          <Route exact path="/instrumentos" component={Instrumentos}/>
          <Route exact path="/crear" component={Crear} />
          <Route exact path="/editar/:id" component={Modificar} />
          <Route exact path="/donde" component={Mapa}/>
        <Route exact path="/detalle/:id" component={DetalleCompleto}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
