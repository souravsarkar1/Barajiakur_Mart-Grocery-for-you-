
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <br />
      <br />
      <br />
      <div style={{
        margin : "10px auto 0px auto"
      }}>
      <AllRoutes/>
      </div>
     
    </div>
  );
}

export default App;
