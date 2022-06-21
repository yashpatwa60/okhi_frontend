import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/login/index.jsx";
import SignUp from "./pages/signup/index.jsx";
import Dashboard from "./pages/dashboard";
import Detail from "./pages/detail";
import { ToastProvider } from 'react-toast-notifications';
import HomePage from "./pages/home";
import AdminDashboard from "./components/admin/Admin.jsx";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
function App() { 
  return (
    <div className="App">
      <ToastProvider placement="top-center" autoDismiss autoDismissTimeout={2000}>
        <Router>
          <Switch>
            <PublicRoute restricted={true} path="/" exact component={() => <HomePage />} />
            <PublicRoute restricted={true} path="/login" exact component={() => <SignIn />} />
            <PublicRoute restricted={true} path="/SignUp" exact component={() => <SignUp />} />
            <PrivateRoute path="/dashboard" exact component={() => <Dashboard />} />
            <Route path="/admin" exact component={() => <AdminDashboard />}/>
            <Route path="/hi/:id" exact component={() => <Detail />} />
          </Switch>
        </Router>
      </ToastProvider>
    </div>
  );
}

export default App;
