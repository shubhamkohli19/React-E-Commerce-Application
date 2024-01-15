import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Routing from "./Components/Routing/Routing";
import { jwtDecode } from "jwt-decode";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const jwtUser = jwtDecode(jwt);
      if (Date.now() >= jwtUser.exp * 1000) {
        localStorage.removeItem("token");
        location.reload();
      }
      setUser(jwtUser);
    } catch {}
  });

  return (
    <>
      <div className="app">
        <Navbar user={user}/>
        <main>
          <Routing />
        </main>
      </div>
    </>
  );
}

export default App;
