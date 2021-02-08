import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/home/home.component';
import Register from './pages/register/register.component';
import Login from './pages/login/login.component';
import AddDebt from './pages/add-debt/add-debt.component';
import EditDebt from './pages/edit-debt/edit-debt.component';
import ShowDebt from './pages/show-debt/show-debt.component'
import Customers from './pages/customers/customers.component';

import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/adicionar-divida" component={AddDebt} />
        <Route path="/clientes" component={Customers}/>
        <Route path="/edit/:id" component={EditDebt} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/:id" component={ShowDebt} />
      </Switch>
    </div>
  );
}

export default App;
