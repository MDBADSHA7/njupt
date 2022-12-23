import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';
import Home from './Home/Home';
const auth = getAuth(app);
function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
