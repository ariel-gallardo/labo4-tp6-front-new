import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Formulario} from './componentes/abm/Formulario'
import {Lista as Instrumentos} from './componentes/Lista'
import {NavBar} from './componentes/NavBar'
import {Home} from './componentes/Home'
import Mapa from './componentes/Mapa'

function App() {
  return (
      <BrowserRouter>
      <NavBar />
      <Switch className="d-flex align-self-center">
          <Route exact path="/" component={Home}/>
          <Route exact path="/instrumentos" component={Instrumentos}/>
          <Route exact path="/crear" component={Formulario} />
          <Route exact path="/editar/:id" component={Formulario} />
          <Route exact path="/donde" component={Mapa}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
