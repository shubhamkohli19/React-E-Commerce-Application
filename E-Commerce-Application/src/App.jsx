import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from './Components/Home/HomePage';

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <main>
          <HomePage/>
        </main>
      </div>
    </>
  );
}

export default App;
