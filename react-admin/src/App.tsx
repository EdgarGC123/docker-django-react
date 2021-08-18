
import './App.css';
import Dashboard from './secure/dashboard/Dashboard';
import Menu from './secure/components/Menu';
// import Nav from './secure/components/Nav';
import Users from './secure/users/Users';
import Login from './public/Login';
import {BrowserRouter, Route} from 'react-router-dom';
import Register from './public/Register';
import RedirectToDashboard from './secure/RedirectToDashboard';
import UserCreate from './secure/users/UserCreate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route  path={'/'} exact component={RedirectToDashboard} />
        <Route  path={'/dashboard'} exact component={Dashboard} />
        <Route  path={'/users'} exact component={Users} />
        <Route  path={'/login'} exact component={Login} />
        <Route  path={'/register'} exact component={Register} />
        <Route path={'/users/create'} component={UserCreate} />
      </BrowserRouter>
    </div>
  );
}

export default App;
