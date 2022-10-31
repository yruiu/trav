import './App.scss';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Routers from "./routers";
import {useAuth} from "./hooks/auth.hook";
import {UseAuthContext} from "./context/AuthContext";

function App() {
    const {login, logout, token, userId, isReady}=useAuth();
    const islogin=!!token;
  return (
    <div className="App">
        <UseAuthContext.Provider value={{login, logout, token, userId, isReady}}>
      <BrowserRouter>
        <Header />
          <Routers auth={islogin}/>
      </BrowserRouter>
        </UseAuthContext.Provider>
    </div>
  );
}

export default App;
