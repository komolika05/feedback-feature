import react, { useState } from "react";
import "./App.scss";
import FloatingAction from "./components/FloatingAction/FloatingAction";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  function handleLoginPress() {
    setIsUserLoggedIn((prev) => !prev);
  }

  return (
    <div className="App">
      {/* NAVBAR */}
      <div className="navbar">
        <span>THE PRODUCT PLATFORM</span>
        <div onClick={handleLoginPress} className="login-btn">
          {isUserLoggedIn ? "LOGOUT" : "LOGIN"}
        </div>
      </div>

      <FloatingAction isUserLoggedIn={isUserLoggedIn} />
    </div>
  );
}

export default App;
