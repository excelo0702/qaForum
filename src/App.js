import { Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import SignupForm from './components/SignUpForm';
import { BrowserRouter } from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import Navbar from './components/Navbar';

const App =()=> {
  return (
      <AuthProvider>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/accounts/signUp" component={SignUp}/>
          <Route path="/accounts/signIn" component={SignIn}/>
          <Route path="/accounts/resetPassword" component={ResetPassword}/>
          <Route path="/profile" component={Profile}/>
          
        </Switch>
      </AuthProvider>
     
    
  );
}

export default App;
