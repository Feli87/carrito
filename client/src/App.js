import React from 'react';
import './styles/App.css';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

//Layouts
import {
  WelcomeLayout,
  HomeLayout,
  AuthLayout,
  CartLayout} from './layouts/layouts';

//Pages
import Catalog from './pages/Catalog/Catalog';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import Product from './pages/Product/Product';
import Search from './pages/Search/Search';

//Auth Pages
import SignIn from './pages/Auth/SignIn/SignIn';
import SignUp from './pages/Auth/SignUp/SignUp';
import SignOut from './pages/Auth/SignOut/SignOut';
import Recovery from './pages/Auth/Recovery/Recovery';
import Profile from './pages/Auth/Profile/Profile';

//Cart Pages
import Cart from './pages/Cart/Cart/Cart';
import Checkout from './pages/Cart/Checkout/Checkout';
import Ticket from './pages/Cart/Ticket/Ticket';

const App = ()=> {
    return (
      <BrowserRouter>
          <Switch>
            
            {/* Routes  */}
            <RouteWrapper exact path="/" component={Welcome} layout={WelcomeLayout}/>
            <RouteWrapper exact path="/home" component={Home} layout={HomeLayout} />
            <RouteWrapper exact path="/catalog" component={Catalog} layout={HomeLayout}/>
            <RouteWrapper exact path="/search" component={Search} layout={HomeLayout}/>
            <RouteWrapper exact path="/product" component={Product} layout={HomeLayout}/>

            {/* Users Routes */}
            <RouteWrapper exact path="/auth/signin" component={SignIn} layout={AuthLayout} />
            <RouteWrapper exact path="/auth/signup" component={SignUp} layout={AuthLayout}/>
            <RouteWrapper exact path="/auth/recovery" component={Recovery} layout={AuthLayout}/>
            <RouteWrapper exact path="/auth/signout" component={SignOut} layout={AuthLayout} />
            <RouteWrapper exact path="/auth/profile" component={Profile} layout={AuthLayout}/>

            {/* Cart Routes */}
            <RouteWrapper exact path="/cart/cart" component={Cart} layout={CartLayout} />
            <RouteWrapper exact path="/cart/checkout" component={Checkout} layout={CartLayout}/>
            <RouteWrapper exact path="/cart/ticket" component={Ticket} layout={CartLayout} />
           
          </Switch>  
      </BrowserRouter>
  );
}
const RouteWrapper = ({ component: Component, layout: Layout, ...rest })=> {

  return (
      <Route
        {...rest}
        render={(props) => (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        )}
      />

  );
};

export default App;
