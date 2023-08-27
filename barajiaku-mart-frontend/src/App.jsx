
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Pages/Home/Footer';
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
     <Footer/>
    </div>
  );
}

export default App;
