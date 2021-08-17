
import './App.css';
import Dashboard from './secure/Dashboard';
import Menu from './secure/components/Menu';
import Nav from './secure/components/Nav';
import Users from './secure/Users';
import Login from './public/Login';
import {BrowserRouter, Route} from 'react-router-dom';
import Register from './public/Register';

function App() {
  return (
    <div>
    <div className="App">
      <Nav/>



<div className="container-fluid">
  <div className="row">

    <Menu/>
    

    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
      <BrowserRouter>
        <Route  path={'/'} exact component={Dashboard} />
        <Route  path={'/users'} exact component={Users} />
        <Route  path={'/login'} exact component={Login} />
        <Route  path={'/register'} exact component={Register} />
      </BrowserRouter>
    </main>
  </div>
</div>
    </div>
    </div>
  );
}

export default App;
