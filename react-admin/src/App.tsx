
import './App.css';
import Dashboard from './secure/dashboard/Dashboard';
// import Menu from './secure/components/Menu';
// import Nav from './secure/components/Nav';
import Users from './secure/users/Users';
import Login from './public/Login';
import {BrowserRouter, Route} from 'react-router-dom';
import Register from './public/Register';
import RedirectToDashboard from './secure/RedirectToDashboard';
import UserCreate from './secure/users/UserCreate';
import UserEdit from './secure/users/UserEdit';
import Roles from './secure/roles/Roles';
import RoleCreate from './secure/roles/RoleCreate';
import RoleEdit from './secure/roles/RoleEdit';
import Products from './secure/products/Products';
import ProductsCreate from './secure/products/ProductCreate';
import ProductEdit from './secure/products/ProductEdit';
import Orders from './secure/orders/Orders';
import OrderItems from './secure/orders/OrderItems';
import Profile from './secure/profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} exact component={RedirectToDashboard} />
        <Route path={'/dashboard'} exact component={Dashboard} />
        <Route path={'/profile'} exact component={Profile} />
        <Route path={'/users'} exact component={Users} />
        <Route path={'/login'} exact component={Login} />
        <Route path={'/register'} exact component={Register} />
        <Route path={'/users/create'} component={UserCreate} />
        <Route path={'/users/:id/edit'} component={UserEdit} />
        <Route path={'/roles'} exact component={Roles} />
        <Route path={'/roles/create'} component={RoleCreate} />
        <Route path={'/roles/:id/edit'} component={RoleEdit} />
        <Route path={'/products'} exact component={Products} />
        <Route path={'/products/create'} component={ProductsCreate} />
        <Route path={'/products/:id/edit'} component={ProductEdit} />
        <Route path={'/orders'} exact component={Orders} />
        <Route path = {'/orders/:id'} component={OrderItems} />
      </BrowserRouter>
    </div>
  );
}

export default App;
