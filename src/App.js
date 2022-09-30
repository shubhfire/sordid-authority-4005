import "./App.css";
import "./App.css";
// import LendPage from "./Pages/LendPage/LendPage";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import OTPPage from "./registerPage/OTPPage";
import Register from "./registerPage/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* <LendPage /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
